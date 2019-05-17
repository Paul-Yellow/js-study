var userName = "paul-yellow";
var timeStamp = Date.parse(new Date());
var jsonDatabse = {"loginUser":userName,"loginTime":timeStamp};
var db = connect('log');
db.login.insert(jsonDatabse);
print('[demo]log  print success');


