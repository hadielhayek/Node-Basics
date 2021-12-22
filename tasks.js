
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


var tasks = [{task:"review js"},{task:"review css"}];
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

  else if(text==='help')
  help();
  
  else if(text.split(" ").shift()==='add')
  add(text);

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
  console.log('these are the commands:/n quit or exit,hello,\n hello:if you type hello alone it will give you hello once you add something with hello it will print it too!')
}
function add(text) {
  if (text == "add") {
    console.log("you should add task ");
  } else {
    task = text.substring(4);
    tasks.push({ task: task })
    console.log(task);
  }
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
     console.table(tasks);
  }
}

// The following line starts the application
startApp("Hadi Elhayek")
