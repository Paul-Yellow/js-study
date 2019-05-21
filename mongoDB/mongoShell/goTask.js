var userName = "paul-yellow";
var age = 18
var timeStamp = Date.parse(new Date());
var jsonDatabse = {"loginUser":userName,"age":18,"loginTime":timeStamp};
var db = connect('log');
db.login.insert(jsonDatabse);
print('[demo]log  print success');


