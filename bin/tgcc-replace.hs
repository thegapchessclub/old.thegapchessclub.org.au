#!/usr/bin/env runhaskell

{-# OPTIONS_GHC -Wall #-}

-- find . -name '*.htm' | xargs -0 tgcc-replace.hs
module Main where

import Control.Monad
import Data.List
import System.Directory
import System.Environment
import System.FilePath
import System.IO
import System.Process

metaWindows1252 ::
  String
metaWindows1252 =
  "<meta http-equiv=Content-Type content=\"text/html; charset=windows-1252\">"

metaUTF8 ::
  String
metaUTF8 =
  "<meta http-equiv=Content-Type content=\"text/html; charset=UTF-8\">"

isBusted ::
  FilePath
  -> IO Bool
isBusted p =
  latin1File p (\c -> 
    let k = contains c metaWindows1252
    in k `seq` pure k)

main ::
  IO ()
main =
  do  a <- getArgs
      mapM_ (\x -> putStrLn ("convert: " ++ x) *> convertFile x) (a >>= lines)
  
convertFile ::
  FilePath
  -> IO ()
convertFile x =
  do  b <- isBusted x
      when b $ 
        do  t <- getTemporaryDirectory
            let tmp = t </> takeFileName x
            _ <- rawSystem "iconv" ["-f", "WINDOWS-1252", "-t", "UTF8", "-o", tmp, x]
            g <- readFile tmp
            writeFile x (replace metaWindows1252 metaUTF8 g)
            _ <- rawSystem "dos2unix" [ x]
            pure ()


latin1File ::
  FilePath
  -> (String -> IO a)
  -> IO a
latin1File a w =
  do  h <- openFile a ReadMode
      hSetEncoding h latin1
      x <- hGetContents h
      y <- w x
      hClose h
      pure y

contains ::
  Eq a =>
  [a]
  -> [a]
  -> Bool
contains x y =
  any (\z -> y `isPrefixOf` z) (tails x)

replace ::
  Eq a =>
  [a] ->
  [a] ->
  [a] ->
  [a]
replace needle replacement haystack =
  case begins haystack needle of
    Just remains ->
      replacement ++ remains
    Nothing ->
      case haystack of
        [] ->
          []
        x : xs ->
          x : replace needle replacement xs

begins ::
  Eq a =>
  [a]
  -> [a]
  -> Maybe [a]
begins haystack [] =
  Just haystack
begins (x : xs) (y : ys) | x == y =
  begins xs ys
begins _        _                 =
  Nothing

quote ::
  String
  -> String
quote s =
  "\"" ++ s ++ "\""

