from server import app

app.run(debug=True, host='0.0.0.0', ssl_context=('server.crt', 'server.key'))
