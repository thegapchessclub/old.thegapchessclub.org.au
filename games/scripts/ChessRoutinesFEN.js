


/* Preloaded images */
var img_wQ = new Image(); img_wQ.src="./images/wq.gif"
var img_wB = new Image(); img_wB.src="./images/wb.gif"
var img_wN = new Image(); img_wN.src="./images/wn.gif"
var img_wR = new Image(); img_wR.src="./images/wr.gif"
var img_wP = new Image(); img_wP.src="./images/wp.gif"
var img_bQ = new Image(); img_bQ.src="./images/bq.gif"
var img_bB = new Image(); img_bB.src="./images/bb.gif"
var img_bN = new Image(); img_bN.src="./images/bn.gif"
var img_bR = new Image(); img_bR.src="./images/br.gif"
var img_bP = new Image(); img_bP.src="./images/bp.gif"



var x_offset = 26, y_offset = 31;
var h_array = new Array();
var a_array = new Array();
var num_moves;
var move_no = 0;
var flip_board = 0;
var notation_visible = 1;


var m_array = fnSetupArray; 



/* ----------------------------------------------------------------------------------------- */



function fnInit()
{


	fnInitialiseBoard()
	fnResetPieces()


}



/* ----------------------------------------------------------------------------------------- */



function fnSetupArray()
{ 

	var m, i, j; 

	var a = new Array(200); 

	for (m = 0; m < 200; m++) 
	{
       		a[m] = new Array(9); 
		for (i = 0; i <= 8; i++) 
	   	{ 
	       		a[m][i] = new Array(9); 
	       		for (j = 0; j <= 8; j++) 
	       		{ 
	        	   	a[m][i][j] = '.'
		       	} 
	   	} 
	}

   	return(a) 

}



/* ----------------------------------------------------------------------------------------- */



document.onkeypress = function keyPress(evt)
{
	var whichKey = window.event.keyCode;

	/* Check for the 'n' key to toggle the notation window on/off */
	if ( whichKey==110 || whichKey==78 ) {
		if ( notation_visible == 1 )
			{ notation_visible = 0 }
		else
			{ notation_visible = 1 }
		fnSetLayerVisibility('move'+move_no, 'Y')
	}
}





function fnInitialiseBoard()
{

	var i, j


	/* Images 0 - 31 */

		document.write('<img src="./images/wr.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wn.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wb.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wq.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wk.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wb.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wn.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wr.gif" STYLE="position:absolute">')

		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/wp.gif" STYLE="position:absolute">')

		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bp.gif" STYLE="position:absolute">')

		document.write('<img src="./images/br.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bn.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bb.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bq.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bk.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bb.gif" STYLE="position:absolute">')
		document.write('<img src="./images/bn.gif" STYLE="position:absolute">')
		document.write('<img src="./images/br.gif" STYLE="position:absolute">')



	document.write('<table border="0" cellspacing="0" cellpadding="0">')

	document.write('<tr>')
	document.write('<td width="16" height="16"><img src="./images/frame_tl.gif"></td>')
	document.write('<td width="400" height="16"><img src="./images/frame_top.gif"></td>')
	document.write('<td width="16" height="16"><img src="./images/frame_tr.gif"></td>')
	document.write('<td width="248" height="16"></td>')
	document.write('</tr>')

	document.write('<tr>')
	document.write('<td width="16" height="400"><img src="./images/frame_left.gif"></td>')
	document.write('<td width="400" height="400">')
	fnCreateChessBoard()
	document.write('</td>')
	document.write('<td width="16" height="400"><img src="./images/frame_right.gif"></td>')
	document.write('<td valign="bottom" align="right" width="248" height="400"><img src="./images/play_buttons.gif" usemap="#button_map" border=0 height=25 width=165></td>')
	document.write('</tr>')

	document.write('<tr>')
	document.write('<td width="16" height="16"><img src="./images/frame_bl.gif"></td>')
	document.write('<td width="400" height="16"><img src="./images/frame_bottom.gif"></td>')
	document.write('<td width="16" height="16"><img src="./images/frame_br.gif"></td>')
	document.write('<td width="248" height="16"></td>')
	document.write('</tr>')

	document.write('</table>')

	fnCreateNotation()
	fnCreatePlayDials()



}



/* ----------------------------------------------------------------------------------------- */



function fnCreatePlayDials()
{

	document.write('<MAP NAME="button_map">')
	document.write('<AREA COORDS="1,1,41,25" TITLE="Back to the start"  HREF="javascript:void(0)" onClick="fnBackToStart(); return false;">')
	document.write('<AREA COORDS="42,1,82,25" TITLE="Back one move"  HREF="javascript:void(0)" onClick="fnBack1(); return false;">')
	document.write('<AREA COORDS="83,1,123,25" TITLE="Forward one move"  HREF="javascript:void(0)" onClick="fnForward1(); return false;">')
	document.write('<AREA COORDS="124,1,165,25" TITLE="Flip board"  HREF="javascript:void(0)" onClick="fnFlipBoard(); return false;">')
	document.write('</MAP>')

}



/* ----------------------------------------------------------------------------------------- */



function fnCreateChessBoard()
{

	document.write('<table border="0" cellspacing="0" cellpadding="0">')

	for (i = 1; i <= 4; i++)
	{
		document.write('<tr>')
		for (k = 1; k <= 4; k++)
		{
			document.write('<td width="50" height="50"><img src="./images/blankl.gif"></td>')
			document.write('<td width="50" height="50"><img src="./images/blankd.gif"></td>')
		}
		document.write('</tr>')
		document.write('<tr>')
		for (k = 1; k <= 4; k++)
		{
			document.write('<td width="50" height="50"><img src="./images/blankd.gif"></td>')
			document.write('<td width="50" height="50"><img src="./images/blankl.gif"></td>')
		}
		document.write('</tr>')
	}

	document.write('</table>')

}



/* ----------------------------------------------------------------------------------------- */



function fnCreateNotation()
{

	var i, k_start


	fnGetMoveCountAndSetArrays()

	for (i = 0; i <= num_moves; i++)
	{

		document.write('<div id="move'+i.toString()+'" STYLE="position:absolute; left: 455px; top: 16px">')

		document.write('<table bgcolor="#F8F1E1" border="1" cellspacing="0" cellpadding="1">')
		document.write('<tr>')
		document.write('<td width="200" height="28"><FONT FACE="Arial" SIZE=2><center>'+game_event+'</center></font></td>')
		document.write('<td width="96" height="28"><FONT FACE="Arial" SIZE=2><center>'+game_date+'</center></font></td>')
		document.write('</tr>')
		document.write('</table>')
		document.write('<table bgcolor="#F8F1E1" border="1" cellspacing="0" cellpadding="1">')
		document.write('<tr>')
		document.write('<td width="300" height="28"><FONT FACE="Arial" SIZE=2><center>'+game_desc+'</center></font></td>')
		document.write('</tr>')
		document.write('</table>')

		document.write('<table bgcolor="#F8F1E1" border="1" cellspacing="0" cellpadding="1">')
		
		k_start=1
		if(i>60){k_start=31}
		if(i>120){k_start=61}
		if(i>180){k_start=91}
		
		for (k = k_start; k <= k_start+14; k++)
		{	
			document.write('<tr><td width="20" height="16"><FONT FACE="Arial" SIZE=2>'+k.toString()+'.</FONT></td><td width="60" height="16"><FONT FACE="Arial" SIZE=2>'+((k*2)-1==i?'<b>':'')+((k*2)-1>num_moves+1?'&nbsp':a_array[(k*2)-1])+((k*2)-1==i?'</b>':'')+'</FONT></td><td width="60" height="16"><FONT FACE="Arial" SIZE=2>'+(k*2==i?'<b>':'')+(k*2>num_moves+1?'&nbsp':a_array[k*2])+(k*2==i?'</b>':'')+'</FONT></td>')
			document.write('<td width="20" height="16"><FONT FACE="Arial" SIZE=2>'+(k+15).toString()+'.</FONT></td><td width="60" height="16"><FONT FACE="Arial" SIZE=2>'+(((k+15)*2)-1==i?'<b>':'')+(((k+15)*2)-1>num_moves+1?'&nbsp':a_array[((k+15)*2)-1])+(((k+15)*2)-1==i?'</b>':'')+'</FONT></td><td width="60" height="16"><FONT FACE="Arial" SIZE=2>'+((k+15)*2==i?'<b>':'')+((k+15)*2>num_moves+1?'&nbsp':a_array[(k+15)*2])+((k+15)*2==i?'</b>':'')+'</FONT></td></tr>')
		}
		document.write('</table>')
		document.write('</div>')

		fnSetLayerVisibility('move'+i.toString(), 'N')

	}

	fnSetLayerVisibility('move0', 'Y')

}



/* ----------------------------------------------------------------------------------------- */



function fnGetMoveCountAndSetArrays()
{

	var i


	num_moves = 0
	a_array[num_moves+1] = ''
	for (i = 0; i < a_desc.length; i++)
	{
		if (a_desc.charAt(i) == '@')
		{
			num_moves = num_moves + 1
			a_array[num_moves+1] = ''
		}
		else
		{
			a_array[num_moves+1] = a_array[num_moves+1] + a_desc.charAt(i)
		}
	}



	num_moves = 0
	h_array[num_moves+1] = ''
	for (i = 0; i < h_desc.length; i++)
	{
		if (h_desc.charAt(i) == '@')
		{
			num_moves = num_moves + 1
			h_array[num_moves+1] = ''
		}
		else
		{
			h_array[num_moves+1] = h_array[num_moves+1] + h_desc.charAt(i)
		}
	}
	num_moves = num_moves - 1

}



/* ----------------------------------------------------------------------------------------- */



function fnResetPieces()
{
	var i


	fnSetPiecePosition(0, 1, 1)
	fnSetPiecePosition(1, 2, 1)
	fnSetPiecePosition(2, 3, 1)
	fnSetPiecePosition(3, 4, 1)
	fnSetPiecePosition(4, 5, 1)
	fnSetPiecePosition(5, 6, 1)
	fnSetPiecePosition(6, 7, 1)
	fnSetPiecePosition(7, 8, 1)

	fnSetPiecePosition(8, 1, 2)
	fnSetPiecePosition(9, 2, 2)
	fnSetPiecePosition(10, 3, 2)
	fnSetPiecePosition(11, 4, 2)
	fnSetPiecePosition(12, 5, 2)
	fnSetPiecePosition(13, 6, 2)
	fnSetPiecePosition(14, 7, 2)
	fnSetPiecePosition(15, 8, 2)

	fnSetPiecePosition(16, 1, 7)
	fnSetPiecePosition(17, 2, 7)
	fnSetPiecePosition(18, 3, 7)
	fnSetPiecePosition(19, 4, 7)
	fnSetPiecePosition(20, 5, 7)
	fnSetPiecePosition(21, 6, 7)
	fnSetPiecePosition(22, 7, 7)
	fnSetPiecePosition(23, 8, 7)

	fnSetPiecePosition(24, 1, 8)
	fnSetPiecePosition(25, 2, 8)
	fnSetPiecePosition(26, 3, 8)
	fnSetPiecePosition(27, 4, 8)
	fnSetPiecePosition(28, 5, 8)
	fnSetPiecePosition(29, 6, 8)
	fnSetPiecePosition(30, 7, 8)
	fnSetPiecePosition(31, 8, 8)



/*  document.layers[0].layers[imgNo].document.images[0].src=imgs[dataNo].src
 }else{
  document.images[imgNo].src=imgs[dataNo].src*/


	eval('document.images[8].src = "./images/wp.gif"')		
	eval('document.images[9].src = "./images/wp.gif"')		
	eval('document.images[10].src = "./images/wp.gif"')		
	eval('document.images[11].src = "./images/wp.gif"')		
	eval('document.images[12].src = "./images/wp.gif"')		
	eval('document.images[13].src = "./images/wp.gif"')		
	eval('document.images[14].src = "./images/wp.gif"')		
	eval('document.images[15].src = "./images/wp.gif"')		

	eval('document.images[16].src = "./images/bp.gif"')		
	eval('document.images[17].src = "./images/bp.gif"')		
	eval('document.images[18].src = "./images/bp.gif"')		
	eval('document.images[19].src = "./images/bp.gif"')		
	eval('document.images[20].src = "./images/bp.gif"')		
	eval('document.images[21].src = "./images/bp.gif"')		
	eval('document.images[22].src = "./images/bp.gif"')		
	eval('document.images[23].src = "./images/bp.gif"')		



	for (i=0; i<=31; i++)
	{
		fnSetPieceVisibility(''+i, 'Y')
	}

}



/* ----------------------------------------------------------------------------------------- */



function fnSetPiecePosition(img_no, i, j)
{

	if (flip_board==1)
	{
		eval('document.images['+img_no+'].style.posLeft = ((8 - i) * 50) + x_offset')
		eval('document.images['+img_no+'].style.posTop = ((j - 1) * 50) + y_offset')



	}
	else
	{
		eval('document.images['+img_no+'].style.posLeft = ((i - 1) * 50) + x_offset')
		eval('document.images['+img_no+'].style.posTop = ((8 - j) * 50) + y_offset')

	}

}



/* ----------------------------------------------------------------------------------------- */



function fnSetPieceVisibility(img_no, visible_yn)
{

	var bVis

	if (visible_yn == 'N')
	{ bVis = '"hidden"'}
	else
	{ bVis = '"visible"'}

	eval('document.images['+img_no+'].style.visibility='+bVis);

}



/* ----------------------------------------------------------------------------------------- */



function fnSetLayerVisibility(layer, visible_yn)
{	

	var bVis

	if (visible_yn == 'N' || notation_visible == 0)
	{ bVis = '"hidden"'}
	else
	{ bVis = '"visible"'}

	eval('document.all.'+layer+'.style.visibility='+bVis);

}



/* ----------------------------------------------------------------------------------------- */



function fnFlipBoard()
{

	var a

	if (flip_board == 0)
	{ flip_board = 1 }
	else
	{ flip_board = 0 }

	for (a=0; a<=31; a++)
	{
		i = 8 - ((eval('document.images['+a+'].style.posLeft') - x_offset) / 50)
		j = ((eval('document.images['+a+'].style.posTop') - y_offset) / 50) + 1
		eval('document.images['+a+'].style.posLeft = ((i - 1) * 50) + x_offset')
		eval('document.images['+a+'].style.posTop = ((8 - j) * 50) + y_offset')
	}


}



/* ----------------------------------------------------------------------------------------- */



function fnForward1()
{
	var layer, to_i, to_j, nTmp, old_piece, new_piece


	if (move_no < num_moves)
	{
		move_no = move_no + 1
	}


	layer = h_array[move_no].charAt(0) + h_array[move_no].charAt(1)
	to_i = h_array[move_no].charAt(8)
	to_j = h_array[move_no].charAt(9)
	old_piece = h_array[move_no].charAt(2) + h_array[move_no].charAt(3)
	new_piece = h_array[move_no].charAt(4) + h_array[move_no].charAt(5)
	if (old_piece != new_piece)
	{
		if (new_piece == "wQ"){	eval('document.images['+layer+'].src = "'+img_wQ.src+'"')	}
		if (new_piece == "wB"){	eval('document.images['+layer+'].src = "'+img_wB.src+'"')	}
		if (new_piece == "wN"){	eval('document.images['+layer+'].src = "'+img_wN.src+'"')	}
		if (new_piece == "wR"){	eval('document.images['+layer+'].src = "'+img_wR.src+'"')	}
		if (new_piece == "bQ"){	eval('document.images['+layer+'].src = "'+img_bQ.src+'"')	}
		if (new_piece == "bB"){	eval('document.images['+layer+'].src = "'+img_bB.src+'"')	}
		if (new_piece == "bN"){	eval('document.images['+layer+'].src = "'+img_bN.src+'"')	}
		if (new_piece == "bR"){	eval('document.images['+layer+'].src = "'+img_bR.src+'"')	}
	}
	fnSetPiecePosition(layer, to_i, to_j)


	layer = h_array[move_no].charAt(12) + h_array[move_no].charAt(13)
	if (layer != '99')
	{
		if (h_array[move_no].charAt(22) == 'N')
		{
			fnSetPieceVisibility(layer, 'N')
		}
		else
		{
			to_i = h_array[move_no].charAt(20)
			to_j = h_array[move_no].charAt(21)
			fnSetPiecePosition(layer, to_i, to_j)
		}
	}


	nTmp = move_no - 1
	fnSetLayerVisibility('move'+nTmp, 'N')
	fnSetLayerVisibility('move'+move_no, 'Y')


}



/* ----------------------------------------------------------------------------------------- */



function fnBack1()
{
	var layer, to_i, to_j, nTmp, old_piece, new_piece


	if (move_no > 0)
	{

		layer = h_array[move_no].charAt(0) + h_array[move_no].charAt(1)
		to_i = h_array[move_no].charAt(6)
		to_j = h_array[move_no].charAt(7)
		old_piece = h_array[move_no].charAt(2) + h_array[move_no].charAt(3)
		new_piece = h_array[move_no].charAt(4) + h_array[move_no].charAt(5)
		if (old_piece != new_piece)
		{

			if (old_piece == "wP"){	eval('document.images['+layer+'].src = "'+img_wP.src+'"')	}
			if (old_piece == "bP"){	eval('document.images['+layer+'].src = "'+img_bP.src+'"')	}
/*			eval('document.images['+layer+'].src'+' = "./images/'+old_piece+'.gif"') */
		}
		fnSetPiecePosition(layer, to_i, to_j)


		layer = h_array[move_no].charAt(12) + h_array[move_no].charAt(13)
		if (layer != '99')
		{
			if (h_array[move_no].charAt(22) == 'N')
			{
				fnSetPieceVisibility(layer, 'Y')
			}
			else
			{
				to_i = h_array[move_no].charAt(18)
				to_j = h_array[move_no].charAt(19)
				fnSetPiecePosition(layer, to_i, to_j)
			}
		}

		fnSetLayerVisibility('move'+move_no, 'N')
		move_no = move_no - 1
		fnSetLayerVisibility('move'+move_no, 'Y')

	}


}



/* ----------------------------------------------------------------------------------------- */



function fnBackToStart()
{

	fnResetPieces()

	fnSetLayerVisibility('move'+move_no, 'N')
	fnSetLayerVisibility('move0', 'Y')
	move_no = 0

}



/* ----------------------------------------------------------------------------------------- */




