const contacts = new Vue({
    el : "#app",
    data : {
        search : '',
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
                        message: '1',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '2',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: '3',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '4',
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
                        message: '5',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '6',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: '7',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '8',
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
                        message: '9',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '10',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: '11',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '12',
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
                        message: '13',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '14',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: '15',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '16',
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
                        message: '17',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '18',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: '19',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '20',
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
                        message: '21',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '22',
                        status: 'received'
                    },
                    {
                        time: '15:30',
                        message: '23',
                        status: 'sent'
                    },
                    {
                        time: '15:30',
                        message: '24',
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
    computed : {
        filteredContacts: function(){
            const filteredArr = []
            const c = this.contacts;
            for (let i = 0; i < c.length; i++){
                if(c[i].name.toLowerCase().includes(this.search.toLowerCase())){
                    filteredArr.push(i)
                }
            }
            return filteredArr;
        },
    }
});