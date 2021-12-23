
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


var tasks = ["review js","review css"];
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text=text.trim();
    if (text === 'quit' || text ==='exit') {
    quit();
  }
  else if(text.split(" ").shift()=== 'hello')
    hello(text);
   else if(text.split(" ")==='edit')
   edit(text)
  else if(text==='help')
  help();
  else if(text.split(" ").shift()==='add')
  add(text);
  else if (text.trim().split(" ")[0] === "edit") {
    edit(text);
  }
  else if(text==='remove')
  remove();
  else if(text ==='remove 1')
  remove1();
  else if(text==='remove 2')
  remove2()
  else if(text==='list')
  list();
  
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  console.log(text +'!')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * Exits the application
 *
 * @returns {void}
 */
 function help(){
  console.log('these are the commands:/n \nquit or exit,\nadd,\nremove,\nlist,\nhello,\n hello:if you type hello alone it will give you hello once you add something with hello it will print it too!')
}
function add(text) {
  if (text == "add") {
    console.log("you should add task ");
  } else {
    task = text.substring(4);
    tasks.push(tasks)
    console.log(tasks);
  }
}
function edit(text){
  var part = text.split(" ").length;
    if (part <1){
      console.log("undefind");
    }
    else if (part >2){
      var textnew = text.split(" ")[2];
      var index = text.split(" ")[1] -1;
      tasks.splice(index, 1, textnew);
    }
    else{
      var textnew = text.split(" ")[1];
      tasks.splice(task.length -1,1, textnew);
    }
    console.log(tasks);
}

function remove(text){
console.log(tasks.pop());
}
function remove1(text){
  console.log(tasks.shift());
  }
  function remove2(text){
    console.log(tasks.splice(1,1));
    }


function list() {
  if(tasks == null){
     console.log("enter some tasks");
  }else{
     console.log(tasks);
  }
}


// The following line starts the application
startApp("Hadi Elhayek")
