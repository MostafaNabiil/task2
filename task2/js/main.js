

var quotes=[
    '<h2>"Do not take life too seriously. You will not get out alive"--. Elbert Hubbard</h2>',

    '<h2>"The best revenge is massive success."--Frank Sinatra</h2>',

    '<h2>"Resentment is like drinking poison and waiting for your enemies to die."--Nelson Mandela</h2>',

    '<h2>"You miss 100% of the shots you donot take." --Wayne Gretzy</h2>'

]   ;


    function getQoute(){
        var randomNumber = Math.floor(Math.random() * quotes.length);
        document.getElementById('new').innerHTML = quotes[randomNumber];
        }
    
