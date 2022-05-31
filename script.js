const contacts = new Vue({
    el : "#app",
    data : {
        activeContact : 0,
        newMsgs : "",
        contacts : [
            {
                name: 'Michele',
                avatar: 'img/avatar2.png',
                visible: true,
                messages: [
                    {
                        time: '15:30',
                        message: 'Hello',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Giapiero',
                avatar: 'img/avatar3.png',
                visible: true,
                messages: [
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Lella',
                avatar: 'img/avatar4.png',
                visible: true,
                messages: [
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Rubino',
                avatar: 'img/avatar5.png',
                visible: true,
                messages: [
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Gianni',
                avatar: 'img/avatar6.png',
                visible: true,
                messages: [
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Loredana',
                avatar: 'img/avatar7.png',
                visible: true,
                messages: [
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: 'Ciao',
                        status: 'received'
                    }
                ]
            }
        ]       
    },
    methods : {
        clickChat(activeContact) {
            this.activeContact = activeContact;
        },
        addItem() {
            const msgs = {
                time: '15:30',
                message: this.newMsgs,
                status: 'sent'
            };
            this.contacts[this.activeContact].messages.push(msgs);
            this.newMsgs = "";
            setTimeout(() => {
                const answer = {
                    time : "15:30",
                    message : "ok",
                    status : "received"
                };
                this.contacts[this.activeContact].messages.push(answer);

            }, 1000);
        },
    },
});