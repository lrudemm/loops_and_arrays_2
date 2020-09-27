/* Write a "for" loop that logs every even number starting from 1000 down to 0 
(you can do this a couple ways, either updating the "i" a certain way 
or by checking if the number is even inside the "for" loop) */

/* less commonly used loop
let count = 100;
while(count >= 0) {
    console.log(count);
    count--;
}   */

for(let i =1000; i >= 0; i--) {
    console.log(i);
}

/* Write a "for" loop that starts at 0 and goes to 10,000,
don't log any numbers but when the "for" loop is 1/4 of the way done through the loops (2,500),
your code should "alert" a message that says "A quarter of the way there!" then when your loop is halfway there (5,000),
your code should "alert"  a message that says "Halfway there!"
Finally when it reaches the last number (10,000, make sure your condition is inclusive of 10,000) it should "alert" "The loop is done!" */

for(let i = 0; i <= 10000; i++) {
    if(i = 2500) {
        alert("A quarter of the way there!");
    }
    if (i = 5000) {
        alert("Halfway there!");
    }
    if (i = 10000){
        alert("The loop is done!");
    }
}

/* Finally write an array of your top 5 favorite tv shows (make them up if you don't have any)
Loop through the array of your top 5 favorite tv shows and log to the console the following message each loop:
"My #<INSERT PROPER NUMBER HERE> favorite tv show is <INSERT TV SHOW HERE>" */

const tvShows = ["My #1 favorite tv show is Schitts Creek", "My #2 favorite tv show is Stranger Things",
     "My #3 favorite tv show is Zoey's Extrodinary Playlist", "My #4 favorite tv show is The Mandalorean",
     "My #5 favorite tv show is The Marvelous Mrs. Masel"];

for(let i = 0; i < tvShows.length; i++) {
    console.log(tvShows[i]);
}

