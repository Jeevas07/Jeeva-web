# Jeeva-web
Jeeva - Personal Roast Zone" Webpage
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jeeva Bro – Roast King</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }

    h1 {
      font-size: 3rem;
      color: #00ffd1;
      margin-bottom: 10px;
      text-shadow: 0 0 15px #00ffd1;
    }

    p {
      font-size: 1.3rem;
      color: #ddd;
      margin-bottom: 30px;
    }

    button {
      padding: 12px 24px;
      background-color: #ff0077;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      color: white;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    button:hover {
      background-color: #ff4b9b;
    }

    #roastBox {
      margin-top: 30px;
      font-size: 1.2rem;
      font-weight: bold;
      color: #00ffcc;
    }
  </style>
</head>
<body>

  <h1>Welcome, Jeeva Bro 🔥</h1>
  <p>You’ve entered the ultimate roast zone 👑</p>
  <button onclick="dropRoast()">Unleash Roast</button>

  <div id="roastBox"></div>

  <script>
    const roasts = [
      "Bro, your browser loads slower than your brain on Monday 😂",
      "You’re so chill, even your charger takes a break ⚡",
      "Your roast skills? Certified microwave level 🔥",
      "Even ChatGPT needed a second to recover from your vibe 😎",
      "You didn’t wake up late... Time just knew you weren’t ready ⏰"
    ];

    function dropRoast() {
      const randomIndex = Math.floor(Math.random() * roasts.length);
      document.getElementById("roastBox").innerText = roasts[randomIndex];
    }
  </script>

</body>
</html>
