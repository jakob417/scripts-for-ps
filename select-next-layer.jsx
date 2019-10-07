var doc = app.activeDocument;
var cLayer = doc.activeLayer;
 
function activ (nLayer_f)
{
	var check = nLayer_f.visible;
	doc.activeLayer = nLayer_f;
	if (check == false)
	doc.activeLayer.visible = false;
}
 
var parL = doc.activeLayer.parent;
var parLln = parL.layers.length;
 
for(i=0; i<parLln;)
{
	if(parL.layers[i]==cLayer)
	{
		try
		{
			nLayer = cLayer.layers[0];
		}
		catch(e)
		{
			if(i!=parLln-1)
			{
				nLayer=parL.layers[i+1];
			}
			else
			{
				upmem = parL;
				while (upmem!=doc && upmem.parent.layers[upmem.parent.layers.length-1]==upmem)
				{
					upmem = upmem.parent;
				}
				if (upmem==doc)
				{
					upmem=upmem.layers[0];
					var lastmem = 1;
				}
				for(k=0;k<upmem.parent.layers.length;)
				{
					if(upmem.parent.layers[k]==upmem)
					{
						aa=k;
						if(lastmem==1)
						{aa=-1;}
						nLayer=upmem.parent.layers[aa+1];
						k=upmem.parent.layers.length;
					}
					else {k++;}
				}
			}
		}
		activ (nLayer);
		i=parLln-1;
	}
	i++;
}