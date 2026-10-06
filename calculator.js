<!DOCTYPE html>
<html>
<head>
    <title>Dynamic Calculator</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            margin-top: 50px;
        }

        .calculator {
            width: 300px;
            margin: auto;
            padding: 20px;
            background: #222;
            border-radius: 15px;
        }

        #display {
            width: 90%;
            height: 50px;
            font-size: 25px;
            text-align: right;
            margin-bottom: 15px;
        }

        button {
            width: 60px;
            height: 50px;
            margin: 4px;
            font-size: 20px;
            cursor: pointer;
        }

        .operator {
            background: orange;
        }

        .equal {
            background: green;
            color: white;
        }
    </style>
</head>

<body>

    <h1>Dynamic Calculator</h1>

    <div class="calculator">

        <input type="text" id="display" value="0" readonly>

        <br>

        <button onclick="clearDisplay()">AC</button>
        <button onclick="deleteNumber()">DEL</button>
        <button onclick="add('%')">%</button>
        <button class="operator" onclick="add('/')">÷</button>

        <br>

        <button onclick="add('7')">7</button>
        <button onclick="add('8')">8</button>
        <button onclick="add('9')">9</button>
        <button class="operator" onclick="add('*')">×</button>

        <br>

        <button onclick="add('4')">4</button>
        <button onclick="add('5')">5</button>
        <button onclick="add('6')">6</button>
        <button class="operator" onclick="add('-')">−</button>

        <br>

        <button onclick="add('1')">1</button>
        <button onclick="add('2')">2</button>
        <button onclick="add('3')">3</button>
        <button class="operator" onclick="add('+')">+</button>

        <br>

        <button onclick="add('0')">0</button>
        <button onclick="add('.')">.</button>
        <button class="equal" onclick="calculate()">=</button>

    </div>

    <script>

        let display = document.getElementById("display");

        function add(value) {

            if (display.value === "0") {
                display.value = value;
            }
            else {
                display.value += value;
            }
        }

        function clearDisplay() {
            display.value = "0";
        }

        function deleteNumber() {

            if (display.value.length > 1) {
                display.value =
                    display.value.slice(0, -1);
            }
            else {
                display.value = "0";
            }
        }

        function calculate() {

            try {

                let expression = display.value;

                let result = eval(expression);

                display.value = result;

            }
            catch {

                display.value = "Error";

            }
        }

    </script>

</body>
</html>