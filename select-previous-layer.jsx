var doc = app.activeDocument;
var cLayer = doc.activeLayer;
var docl = doc.layers.length;
 
function activ (pLayer_f)
{
	var check = pLayer_f.visible;
	doc.activeLayer = pLayer_f;
	if (check == false)
	doc.activeLayer.visible = false;
}
 
var parL = doc.activeLayer.parent;
var parLln = parL.layers.length;
 
for(i=0; i<parLln;)
{
	if(parL.layers[i]==cLayer)
	{
		aa=i
		if(i==0 && parL!=doc)//active layer is 1st in group but not tompost in the doc
		{
			var pLayer = parL;
			activ (pLayer);
			i = parLln-1;
		}
		else
		{
			if (i==0 && parL==doc)//AL is topmost in the doc
			{aa=docl;}
			upmem = parL.layers[aa-1];
			var oops;
			while (oops<1)
			{
				try
				{
					upmem = upmem.layers[upmem.layers.length-1];
				}
				catch(e)
				{
					oops=1;
				}
			}
			var pLayer = upmem;
			activ (pLayer);
			i = parLln-1;
		}
	}
	i++;
}