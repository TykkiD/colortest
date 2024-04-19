<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" type="text/css">
</head>
<body>
  <div id="game-container">
    <h1>Värinäkötesti</h1>
    <p>Mikä ruuduista on erivärinen?</p>
    <div id="timer"><span id="seconds">15</span><span id="hurry-seconds"></span></div>
    <div class="flex">
      <div id="game"></div>
      <div id="score">
        Tuloksesi:
        <div class="level">0</div>
        virheesi:
        <div class="mistakes">0</div>
      </div>
    </div>
  </div>
  <div id="popup-bg">
    <div class="results-popup">
      <div class="results">
        <ul>
          <li>ENNÄTYKSESI:  <span class="score-record">1</span></li>
          <li>TULOKSESI: <span class="score-level">1</span></li>
          <li>VIRHEESI: <span class="score-mistakes">5</span></li>
        </ul>
      </div>
      <div class="playagain" onclick="playAgain()"></div>
    </div>
  </div>
  <script type="text/javascript" src="game.js"></script>
</body>
</html>