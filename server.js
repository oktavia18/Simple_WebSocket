const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log('Server WebSocket berjalan di ws://localhost:8080');

// Simpan riwayat percakapan per client
const clients = new Map();

wss.on('connection', function connection(ws) {
  console.log('Client terhubung.');

  // Inisialisasi riwayat untuk client baru
  clients.set(ws, []);

  // Kirim pesan pertama dari server
  ws.send('Halo! Aku siap mengobrol denganmu! 🤖');

  ws.on('message', function incoming(message) {
    const clientMessage = message.toString().toLowerCase();
    console.log('Pesan dari client:', clientMessage);

    const history = clients.get(ws);
    history.push({ from: 'client', text: clientMessage });

    let reply = '';

    // Logika membalas berdasarkan isi pesan dan riwayat
    if (clientMessage.includes('halo')) {
      reply = getRandomReply([
        'Halo juga! Senang bertemu denganmu 👋',
        'Hai! Apa kabar hari ini?',
        'Salam kenal! 😄'
      ]);
    } else if (clientMessage.includes('baik') || clientMessage.includes('alhamdulillah')) {
      reply = getRandomReply([
        'Alhamdulillah! Semoga harimu menyenangkan ☀️',
        'Senang mendengarnya! Mau cerita apa hari ini?'
      ]);
    } else if (clientMessage.includes('nama')) {
      reply = 'Namaku ChatServer 🤖. Senang berkenalan denganmu!';
    } else if (clientMessage.includes('kamu bisa apa')) {
      reply = 'Aku bisa ngobrol sederhana denganmu. Mau coba? 😁';
    } else if (clientMessage.includes('bye') || clientMessage.includes('dadah')) {
      reply = 'Sampai jumpa lagi! 👋 Semoga harimu menyenangkan!';
    } else {
      // Kalau tidak dikenali, jawab berdasarkan riwayat
      if (history.length < 5) {
        reply = 'Ceritakan lebih banyak, aku mendengarkan... 👂';
      } else {
        reply = getRandomReply([
          'Wah, menarik! Ceritakan lebih lanjut!',
          'Hmm, bisa dijelaskan sedikit lagi?',
          'Aku belum paham, coba ceritakan dari awal?'
        ]);
      }
    }

    ws.send(reply);
    history.push({ from: 'server', text: reply });
  });

  ws.on('close', function() {
    console.log('Client terputus.');
    clients.delete(ws); // Bersihkan data saat client keluar
  });
});

// Fungsi membalas secara random dari beberapa pilihan
function getRandomReply(replies) {
  return replies[Math.floor(Math.random() * replies.length)];
}
