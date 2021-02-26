var protobuf = require("protobufjs");

protobuf.load("awesome.proto", function(err, root) {
    if (err) throw err;
     // enum
    var typesEnum = root.lookupEnum("awesomepackage.Types");
    let types = typesEnum.values
    console.log(types);

    // message
    var msgType = root.lookupType("awesomepackage.AwesomeMessage");
    var payload = { awesomeField: 'a', type: types.B};
    let msg = msgType.create(payload)
    let buf = msgType.encode(msg).finish()
    console.log(buf);
    let data = msgType.decode(buf)
    console.log(data);
});