(function(global, $) {

    // 'new' an object
    var Greetr = function(firstName, lastName, language) {
      return new Greetr.init(firstName, lastName, language);

    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['en', 'pt'];

    var greetings = {
        en: 'Hello',
        pt: 'Olá'
    };

    var formalGreetings = {
        en: 'Greetings',
        pt: 'Saudações'
    };

    var logMessages = {
        en: 'Logged in',
        pt: 'Sessão iniciada'
    }

    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // 'this' refers to the calling object at execution time
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            if(formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }
            if(console) {
                console.log(msg);
            }
            // makes the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());

            }
            return this;
        },

        setLang: function(lang) {
            this.language = lang
            this.validate();
            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if(!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if(formal) {
                msg = this.formalGreetings();
            }else {
                msg = this.gretting();
            }

            $(selector).html(msg);
            return this;
        }

    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greetr.init.prototype = Greetr.prototype;

    // attach our Greetr to the global object, and provide a shorthand '$G' for easy call
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
