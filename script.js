function enemy() {
    const NameEnter = document.querySelector(".enter-enemy-name");
    const reset = document.querySelector(".reset-enemy");
    const Name = document.querySelector(".enemy-name");
    const Score = document.querySelector(".enemy-score");
    const add1 = document.querySelector(".enemy-add1");
    const add2 = document.querySelector(".enemy-add2");
    const add3 = document.querySelector(".enemy-add3");
    const minus1 = document.querySelector(".enemy-minus1");
    const minus2 = document.querySelector(".enemy-minus2");
    const minus3 = document.querySelector(".enemy-minus3");
    let intScore = 0;

    Score.innerHTML = intScore;


    NameEnter.addEventListener("click", function () {
        const NameInput = document.querySelector(".input-name-enemy");

        let showname = NameInput.value;

        Name.innerHTML = showname;
        Name.setAttribute("style", "display: block !important");
        Name.classList.add("add-padding");

        NameInput.value = "";
    });

    reset.addEventListener("click", function () {
        Score.innerHTML = "0";

        Name.setAttribute("style", "display: none !important");
        Name.classList.remove("add-padding");
    });

    add1.addEventListener("click", function () {
        intScore += 1;

        Score.innerHTML = intScore;
    });

    add2.addEventListener("click", function () {
        intScore += 2;

        Score.innerHTML = intScore;
    });

    add3.addEventListener("click", function () {
        intScore += 3;

        Score.innerHTML = intScore;
    });

    minus1.addEventListener("click", function () {
        intScore -= 1;

        Score.innerHTML = intScore;
    });

    minus2.addEventListener("click", function () {
        intScore -= 2;

        Score.innerHTML = intScore;
    });

    minus3.addEventListener("click", function () {
        intScore -= 3;

        Score.innerHTML = intScore;
    });
}
enemy();

function team() {
    const NameEnter = document.querySelector(".enter-team-name");
    const reset = document.querySelector(".reset-team");
    const Name = document.querySelector(".team-name");
    const Score = document.querySelector(".team-score");
    const add1 = document.querySelector(".team-add1");
    const add2 = document.querySelector(".team-add2");
    const add3 = document.querySelector(".team-add3");
    const minus1 = document.querySelector(".team-minus1");
    const minus2 = document.querySelector(".team-minus2");
    const minus3 = document.querySelector(".team-minus3");
    let intScore = 0;

    Score.innerHTML = intScore;

    NameEnter.addEventListener("click", function () {
        const NameInput = document.querySelector(".input-name-team");

        let showname = NameInput.value;

        Name.innerHTML = showname;
        Name.setAttribute("style", "display: block !important");
        Name.classList.add("add-padding");

        NameInput.value = "";
    });

    reset.addEventListener("click", function () {
        Score.innerHTML = "0";

        Name.setAttribute("style", "display: none !important");
        Name.classList.remove("add-padding");
    });

    add1.addEventListener("click", function () {
        intScore += 1;

        Score.innerHTML = intScore;
    });

    add2.addEventListener("click", function () {
        intScore += 2;

        Score.innerHTML = intScore;
    });

    add3.addEventListener("click", function () {
        intScore += 3;

        Score.innerHTML = intScore;
    });

    minus1.addEventListener("click", function () {
        intScore -= 1;

        Score.innerHTML = intScore;
    });

    minus2.addEventListener("click", function () {
        intScore -= 2;

        Score.innerHTML = intScore;
    });

    minus3.addEventListener("click", function () {
        intScore -= 3;

        Score.innerHTML = intScore;
    });
}
team();