# CyberSuite
A simple suite of homemade tools for completing CTFs(capture the flags)

# Setup
These tools have been tested using\
Ubuntu 20.04\
Node 18.18

# Scanners

## Port scanner
A simple port-scanner that can be used with the following syntax:
```bash
node PortScanner.js <IP address> <max port>
```
The max port argument is optional.

# Utilities

## CSVParser
Parses CSV files into JSON for use in other programs. Works with the following syntax:
```bash
node CSVParser.js <path to file>
```
The output will be written to outputCSV.json
