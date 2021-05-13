var app = new Vue (
    {
        el: '#root',
        data : {
            navbar: ['Home', 'Apple', 'Microsoft', 'Android', 'Forums', 'Contact us'],

            footer: [
                {
                    h6 : 'popular topics',
                    a : ['Nam a dolor volutpat massa auctor semper',
                    'Sed euismod nunc urna fermentum arcu dapibus fringilla.',
                    'Cras lacinia tellus id mauris finibus lacus molestie',
                    'Curabitur a scelerisque ligula']
                },
                {
                    h6 : 'recent topics',
                    a : ['Cras lacinia tellus id mauris finibus lacus molestie',
                    'Proin at ligula sagittis vestibulum nisi vitae',
                    'Sed nec metus at est tincidunt elementum',
                    'Nulla egestas nulla eu nulla suscipit molestie']
                },
                {
                    h6 : 'latest replies',
                    a : ['Cras lacinia tellus id mauris finibus lacus molestie',
                    'Cras lacinia tellus id mauris finibus lacus molestie',
                    'Nulla egestas nulla eu nulla suscipit molestie',
                    'Mauris ac nibh quis eros sagittis lacinia a et dui'
                ]
                }

            ]
            

        },
        methods: {
        }
        
    }
);