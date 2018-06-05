// This code helps you re-use JavaScript functions within the "Function" modules of the same project
// I have a "Function" module called "tools", where I have functions to re-use
// And another module called "main"


// To include in your "main" module
var split = {{tools}}.split('\n\n').slice(0, -1);
for (i in split){
    name_function = split[i].split('::')[0];
    eval_function = split[i].split('::')[1];
    eval("var "+name_function+"="+eval_function);
}

// To include in your "tools" module
function function_a(a, b, c) {
   return 42;
}

function function_b(d){
    return 21;
}

var a = {};
a.function_a = function_a;
a.function_b = function_b;

function objToString (obj) {
   var str = '';
   for (var p in obj) {
       if (obj.hasOwnProperty(p)) {
           str += p + '::' + obj[p] + '\n\n';
       }
   }
   return str;
}

return objToString(a);