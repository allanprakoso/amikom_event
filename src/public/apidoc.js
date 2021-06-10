$(document).ready(function () {
    $.get("/kategori", function (data) {
        const a = [];
        for (i = 0; i < 2; i++) {
            a.push(data[i]);
        }
        document.getElementById("getkategoriresponse").innerHTML = JSON.stringify(a, 0, 2);
    })

    const reqKategori = { "nama": "namakategori" };
    const resKategori = {
        "status": "success",
        "message": "kategori berhasil ditambahkan",
        "data": {
            "idKategori": 32
        }
    };
    document.getElementById("reqpostkategori").innerHTML = JSON.stringify(reqKategori, 0, 2);
    document.getElementById("respostkategori").innerHTML = JSON.stringify(resKategori, 0, 2);

    const reqPutKategori = { "nama": "punya nama apa ?" };
    const resPutKategori = {
        "status": "success",
        "message": "kategori berhasil diedit",
        "data": {
            "id": 32,
            "nama": "punya nama apa ?"
        }
    };
    const resDeleteKategori = {
        "status": "success",
        "message": "kategori berhasil dihapus"
    };

    document.getElementById("reqputkategori").innerHTML = JSON.stringify(reqPutKategori, 0, 2);
    document.getElementById("resputkategori").innerHTML = JSON.stringify(resPutKategori, 0, 2);
    document.getElementById("resdeletekategori").innerHTML = JSON.stringify(resDeleteKategori, 0, 2);


    const resGetEvent = [
        {
            "id": 1,
            "judul": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!",
            "deskripsi": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!\r\n\r\nAlways wanted to start an AI Tech Startup? Now we have a complete blueprint for you start your own Artificial Intelligence Tech Startup Business. During our tech startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Artificial Intelligence Tech Startup Business into different market.s and industries. For more information visit our website at Atechup.com",
            "tanggal": "2021-06-12T12:00:00.000Z",
            "urlEvent": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
            "urlImage": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
            "kategori": "Workshop",
            "idKategori": 1
        },
        {
            "id": 2,
            "judul": "Develop a Successful Virtual Reality VR Tech Startup Business Today! VR Startup Hackathon | VR Startup Workshop | VR Startup Class",
            "deskripsi": "Learn to Develop a Successful Virtual Reality VR Startup Business Today!\r\n\r\nAlways wanted to start an Virtual Reality VR Tech Startup? Now we have a complete blueprint for you start your own Virtual Reality VR Startup Business. During our Virtual Reality VR startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Virtual Reality VR Tech Startup Business into different market.s and industries. For more information visit our website at Atechup.com\r\n\r\n",
            "tanggal": "2021-06-08T12:39:52.000Z",
            "urlEvent": "https://www.eventbrite.com/e/develop-your-own-successful-virtual-reality-startup-vr-startup-hackathon-tickets-116356468329?aff=ebdssbdestsearch",
            "urlImage": "https://www.eventbrite.com/e/develop-your-own-successful-virtual-reality-startup-vr-startup-hackathon-tickets-116356468329?aff=ebdssbdestsearch",
            "kategori": "Workshop",
            "idKategori": 1
        },]
    const resGetEventId = {
        "id": 1,
        "judul": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!",
        "deskripsi": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!\r\n\r\nAlways wanted to start an AI Tech Startup? Now we have a complete blueprint for you start your own Artificial Intelligence Tech Startup Business. During our tech startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Artificial Intelligence Tech Startup Business into different market.s and industries. For more information visit our website at Atechup.com",
        "tanggal": "2021-06-12T12:00:00.000Z",
        "urlEvent": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
        "urlImage": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
        "kategori": "Workshop",
        "idKategori": 1
    }

    const reqPostEvent = {
        "judul": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!",
        "deskripsi": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!\r\n\r\nAlways wanted to start an AI Tech Startup? Now we have a complete blueprint for you start your own Artificial Intelligence Tech Startup Business. During our tech startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Artificial Intelligence Tech Startup Business into different market.s and industries. For more information visit our website at Atechup.com",
        "tanggal": "2021-06-12T12:00:00.000Z",
        "urlEvent": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
        "urlImage": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
        "idKategori": 1
    }

    const resPostEvent = {
        "status": "success",
        "message": "Event berhasil ditambahkan",
        "data": {
            "idEvent": 7
        }
    }

    const reqPutEvent = {
        "judul": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!",
        "deskripsi": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!\r\n\r\nAlways wanted to start an AI Tech Startup? Now we have a complete blueprint for you start your own Artificial Intelligence Tech Startup Business. During our tech startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Artificial Intelligence Tech Startup Business into different market.s and industries. For more information visit our website at Atechup.com",
        "tanggal": "2021-06-12T12:00:00.000Z",
        "urlEvent": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
        "urlImage": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
        "idKategori": 1
    }

    const resPutEvent = {
        "status": "success",
        "message": "Event berhasil diedit",
        "data": {
            "id": 7,
            "judul": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!",
            "deskripsi": "Learn to Develop a Successful Artificial Intelligence Tech Startup Business Today!\r\n\r\nAlways wanted to start an AI Tech Startup? Now we have a complete blueprint for you start your own Artificial Intelligence Tech Startup Business. During our tech startup program you will learn and navigate through tools, software, hardware, platforms, resources, projects, processes, methods and strategies to penetrate your own Artificial Intelligence Tech Startup Business into different market.s and industries. For more information visit our website at Atechup.com",
            "tanggal": "2021-06-12T05:00:00.000Z",
            "urlEvent": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
            "urlImage": "https://www.eventbrite.com/e/develop-a-successful-artificial-intelligence-startup-business-tickets-100671598461",
            "idKategori": 1
        }
    }

    const resDeleteEvent = {
        "status": "success",
        "message": "Event berhasil dihapus"
    }


    document.getElementById("geteventresponse").innerHTML = JSON.stringify(resGetEvent, 0, 2);
    document.getElementById("geteventidresponse").innerHTML = JSON.stringify(resGetEventId, 0, 2);
    document.getElementById("reqpostevent").innerHTML = JSON.stringify(reqPostEvent, 0, 2);
    document.getElementById("respostevent").innerHTML = JSON.stringify(resPostEvent, 0, 2);
    document.getElementById("reqputevent").innerHTML = JSON.stringify(reqPutEvent, 0, 2);
    document.getElementById("resputevent").innerHTML = JSON.stringify(resPutEvent, 0, 2);
    document.getElementById("resdeleteevent").innerHTML = JSON.stringify(resDeleteEvent, 0, 2);


    const reqPostPeserta = {
        "nama": "nama peserta",
        "email": "email@hhhh.com",
        "notelp": "34567890-",
        "gender": "Laki-Laki",
        "idEvent": 1
    }

    const resPostPeserta = {
        "status": "success",
        "message": "Registrasi Berhasil",
        "data": {
            "idPeserta": 2
        }
    }

    const resGetPeserta = [
        {
            "id": 2,
            "nama": "nama peserta",
            "email": "email@hhhh.com",
            "notelp": "34567890-",
            "gender": "Laki-Laki",
            "idEvent": 1
        }
    ]

    document.getElementById("reqpostpeserta").innerHTML = JSON.stringify(reqPostPeserta, 0, 2);
    document.getElementById("respostpeserta").innerHTML = JSON.stringify(resPostPeserta, 0, 2);
    document.getElementById("getpesertaresponse").innerHTML = JSON.stringify(resGetPeserta, 0, 2);
    
})