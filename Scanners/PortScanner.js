const net = require("net");

function main() {
  const argv = process.argv;
  const argc = argv.length;

  //Validate inputs
  if (!validateArgs(argc)) {
    return;
  }

  const remote = argv[2];
  const timeout = 1000;
  //Set port range to either default or user input if given
  const maxPorts = argv[3] ? argv[3] : 60000;

  for (let index = 1; index < maxPorts; index++) {
    checkPort(index, remote, timeout);
  }
}

function validateArgs(argc) {
  if (argc < 3 || argc > 4) {
    console.log(
      "Usage: <target IP Adress> <Ports to scan up to(inclusive)>.\nExample: PortScanner 1.1.1.1 1000. will scan target ports up to 10000",
    );
    return false;
  } else {
    return true;
  }
}

function checkPort(port, host, timeout) {
  //Create new TCP connection
  const socket = net.createConnection(
    { port: port, host: host, timeout: timeout },
    () => {
      socket.end();
      console.log(`Port open at ${port}`);
      return;
    },
  );
  socket.on("timeout", () => {
    socket.end();
    return;
  });
  socket.on("error", (err) => {
    socket.end();
    return;
  });
}

main();
