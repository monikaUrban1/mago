function ShowContent(d)
{
  if (d.length < 1)
    return;
  document.getElementById(d).style.display = "block";
  document.getElementById(show).style.display = "none"
}
function HideContent(d)
{
  if (d.length < 1)
    return;
  document.getElementByID('hide').style.display = "block"
  document.getElementById(d).style.display = "none";
}