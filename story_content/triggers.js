function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QJaVO6eE5z":
        Script1();
        break;
      case "5V3WeU2FB2Y":
        Script2();
        break;
      case "6kg9XLHJXhG":
        Script3();
        break;
      case "6P0DPS0SD21":
        Script4();
        break;
      case "5iSFQqScrkF":
        Script5();
        break;
      case "62S0VMXq5sM":
        Script6();
        break;
      case "6qGVfI29Bg8":
        Script7();
        break;
      case "6l4hvn2vfkJ":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6U19wQB1zng');
const duration = 500;
const easing = 'ease-out';
const id = '6RCtlYykafu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6U19wQB1zng');
const duration = 500;
const easing = 'ease-out';
const id = '6RCtlYykafu';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('5ef3vk4l36m');
const duration = 750;
const easing = 'ease-out';
const id = '6GWNFN2D5yK';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6EhpTNbRp4Q');
const duration = 750;
const easing = 'ease-out';
const id = '6ZL7HPr48Ke';
const pulseAmount = 0.07;
const delay = 6000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6gRTtrJBWmk');
const duration = 750;
const easing = 'ease-out';
const id = '5n1QOs65sCc';
const pulseAmount = 0.07;
const delay = 11000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5ef3vk4l36m');
const duration = 750;
const easing = 'ease-out';
const id = '6GWNFN2D5yK';
const pulseAmount = 0.07;
const delay = 21000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6EhpTNbRp4Q');
const duration = 750;
const easing = 'ease-out';
const id = '6ZL7HPr48Ke';
const pulseAmount = 0.07;
const delay = 25000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('5ef3vk4l36m');
const duration = 750;
const easing = 'ease-out';
const id = '6GWNFN2D5yK';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
