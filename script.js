//  Задача 1
function counter(n) {
    let counter = 0;
    const id = setInterval(() => {
        console.log(++counter);
        if (counter == n) {
            clearInterval(id);
        }
    }, 1000);
}

function createCounter(n) {
    class counter {
        constructor(seconds) {
            this.seconds = seconds;
            this.counter = this.seconds;
            this.id = 0;
            this.start = function () {
                this.id = setInterval(() => {
                    console.log(--this.counter);
                    if (this.counter == 0) {
                        this.stop();
                    }
                }, 1000);
            };
            this.pause = function () {
                clearInterval(this.id);
            };
            this.stop = function () {
                this.pause();
                this.counter = this.seconds;
            };
        }
    }
    let newCounter = new counter(n);
    return newCounter;
}
//Задача 2
function delay(n, log = "Result after " + n + " seconds") {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
    promise.then((result) => console.log(log));
}

function delayCounter(n) {
    let counter = n;
    for (i = 0; i < n; i++) {
        delay(i, n - i);
    }
}

function getFirstRepositoryByUser(username) {
    return fetch("https://api.github.com/users/" + username + "/repos")
        .then((response) => {
            if (response.status == 200) {
                response.json().then((repos) => {
                    let firstrepo = repos[0];
                    repos.forEach((repo) => {
                        if (firstrepo.created_at >= repo.created_at) {
                            firstrepo = repo;
                        }
                    });
                    console.log(firstrepo.name);
                });
            }
        });
}
//Задача 3
async function getGitHubUser(username) {
    const response = await fetch("https://api.github.com/users/" + username);
    const json = await response
        .json()
        .then((user) => {
            console.log("Full name: " + user.name);
        });
}
