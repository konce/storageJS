require(['storage'], function (Stroage) {
       var content = storage.get('sidebarContent');
       if(!content) {
           // Do an AJAX request to get the sidebar content
           // ... and then store returned content for an hour
           storage.set('sidebarContent', content, 60); 
       }
});
