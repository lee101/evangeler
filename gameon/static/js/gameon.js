// Globals: JQuery/$
(function ($) {
    $.event.special.destroyed = {
        remove: function (o) {
            if (o.handler) {
                o.handler();
            }
        }
    };
})(jQuery);

var GameOnUser = function (userJSON) {

    userJSON.saveScore = function (game_mode, score, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/savescore",
            "data": {game_mode: game_mode, score: score},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.scores.push({'game_mode': game_mode, 'score': score});
        reorderScores();
    };
    userJSON.deleteAllScores = function (callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/deleteallscores",
            "data": {},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.scores = [];
    };

    var reorderScores = function () {
        userJSON.scores.sort(function (a, b) {
            return a.game_mode - b.game_mode;
        });
    };
    reorderScores();

    userJSON.getHighScores = function () {
        var highScores = [];
        var scores = userJSON.scores;

        for (var groupNum = 0; groupNum < scores.length;) {

            var highScore = scores[groupNum].score;
            var highScoreIdx = groupNum;

            var groupLength = 1;
            //find max high score in group
            for (var i = groupNum + 1; i < scores.length && scores[i].game_mode === scores[i - 1].game_mode; i++) {
                if (highScore < scores[i].score) {
                    highScore = scores[i].score;
                    highScoreIdx = i;
                }
                groupLength++;
            }
            highScores.push(scores[highScoreIdx]);
            groupNum += groupLength;
        }

        return highScores;
    };

    userJSON.saveAchievement = function (achievementNumber, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/saveachievement",
            "data": {type: achievementNumber},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.achievements.push({type: achievementNumber})
    };

    userJSON.saveVolume = function (volume, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/savevolume",
            "data": {volume: volume},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.volume = volume
    };

    userJSON.saveMute = function (mute, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/savemute",
            "data": {mute: mute},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.mute = mute

    };

    userJSON.saveLevelsUnlocked = function (levelsUnlocked, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/savelevelsunlocked",
            "data": {levels_unlocked: levelsUnlocked},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.levels_unlocked = levelsUnlocked
    };

    userJSON.saveDifficultiesUnlocked = function (difficultiesUnlocked, callback) {
        if (typeof callback == 'undefined') {
            callback = function (data) {
            }
        }
        $.ajax({
            "url": "/gameon/savedifficultiesunlocked",
            "data": {difficulties_unlocked: difficultiesUnlocked},
            "success": function (data) {
                callback(data)
            },
            "type": "GET",
            "cache": false,
            "error": function (xhr, error, thrown) {
                if (error == "parsererror") {
                }
            }
        });
        userJSON.difficulties_unlocked = difficultiesUnlocked
    };


    return userJSON;
};
var gameon = new (function () {
    "use strict";
    var self = this;

    self.getUser = function (callback) {
        if (self.user) {
            callback(self.user);
        }
        else {

            $.ajax({
                "url": "/gameon/getuser",
                "data": {},
                "success": function (user) {
                    self.user = GameOnUser(user);
                    callback(self.user);
                },
                "type": "GET",
                "cache": false,
                "error": function (xhr, error, thrown) {
                    if (error == "parsererror") {
                    }
                }
            });
        }
    };

    // ========== SOUND ================

    soundManager.setup({
        // where to find the SWF files, if needed
        url: '/gameon/static/js/lib/soundmanager/script',
        onready: function () {
            // SM2 has loaded, API ready to use e.g., createSound() etc.
        },
        ontimeout: function () {
            // Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
        }

    });

    self.loadSound = function (name, url) {
        soundManager.onready(function () {
            soundManager.createSound({
                id: name,
                url: url
            });
        });
    };
    self.loadSound("doublepoints", '/gameon/static/music/doublepoints.m4a');

    self.playSound = function (name) {
        soundManager.onready(function () {
            soundManager.play(name);
        });
    };

    self.pauseSound = function (name) {
        soundManager.onready(function () {
            soundManager.pause(name);
        });
    };

    self.pauseAll = soundManager.pauseAll;
    self.resumeAll = soundManager.resumeAll;

    /**
     * @param volume 0 to 1 global volume
     */
    self.setVolume = function (volume) {
        volume = volume * 100;
        $.each(soundManager.sounds, function (name, sound) {
            sound.setVolume(volume);
        });
    };

    function _loopSound(sound) {
        sound.play({
            onfinish: function () {
                _loopSound(sound);
            }
        });
    }

    self.loopSound = function (name) {
        soundManager.onready(function () {
            var sound = soundManager.getSoundById(name);
            _loopSound(sound);
//            sound.play({loops:999999});
        });
    };

    self.mute = function () {
        soundManager.mute();
        self.getUser(function (user) {
            user.saveMute(1);
        });
    };

    self.unmute = function () {
        soundManager.unmute();
        self.getUser(function (user) {
            user.saveMute(0);
        });
    };

    //TODO TEST clicks
    self.muteClick = function () {
        $('.gameon-volume__unmute').show();
        $('.gameon-volume__mute').hide();
        self.mute();
    };
    self.unmuteClick = function () {
        $('.gameon-volume__unmute').hide();
        $('.gameon-volume__mute').show();
        self.unmute();
    };

    self.renderVolumeTo = function (target) {
        var $volumeControl = $('.gameon-volume-template .gameon-volume').detach();
        $volumeControl.appendTo(target);

        $(target).bind('destroyed', function () {
            $(target + ' .gameon-volume').detach().appendTo('.gameon-volume-template');
        });
    };


    self.getUser(function (user) {
        //render volume control
        $(document).ready(function () {
            var slider = $(".gameon-volume [data-slider]");
            slider.simpleSlider("setRatio", user.volume);
            if (user.mute) {
                $('.gameon-volume__unmute').show();
                self.mute();
            }
            else {
                $('.gameon-volume__mute').show();
            }

            slider
                .bind("slider:ready slider:changed", function (event, data) {
                    self.setVolume(data.ratio);
                    self.getUser(function (user) {
                        user.saveVolume(data.ratio);
                    });

                });
        });
    });


    // ===================       Clock       ===============================

    self.clock = new (function () {
        var self = this;

        self.init = function (gameOver, startSeconds) {
            if (!startSeconds) {
                self.startSeconds = 5 * 60;
            }
            else {
                self.startSeconds = startSeconds;
            }
            self.reset();
            self.gameOver = gameOver;
            return self;
        };
        self.gameOver = function () {
        };
        self.startSeconds = 5 * 60;
        self.started = false;

        self.reset = function () {
            self.seconds = self.startSeconds;
            self.started = false;
        };

        self.start = function () {
            self.started = true;
        };
        self.unpause = self.start;
        self.pause = function () {
            self.started = false;
        };

        self.tick = function () {

        };

        self.getTime = function () {
            return self._formattedTime;
        };
        self.setTime = function (seconds) {
            self.seconds = seconds;
            self._updateFormattedTime();
        };

        self._updateFormattedTime = function () {
            var separator = ':';
            if (self.seconds % 60 <= 9) {
                separator = ':0';
            }
            self._formattedTime = Math.floor(self.seconds / 60) + separator + self.seconds % 60;
        };
        self.setTime(self.startSeconds);

        setInterval(function () {
            if (self.started) {
                self.setTime(self.seconds - 1);
                self._updateFormattedTime();
                self.tick();
                $('.gameon-clock').html(self.getTime());
                if (self.seconds <= 0) {
                    self.reset();
                    self.gameOver();
                }
            }
        }, 1000);

        return self.init;
    })();

    // =====================       Board            ===========================
    var numBoards = 0;

    /**
     * tiles MUST have the functions click(), reRender() and render()
     * @param width
     * @param height
     */
    self.boards = {};
    self.cleanBoards = function () {
        self.boards = {};
        numBoards = 0;
    };

    self.board = function (width, height, tiles) {
        var boardSelf = this;

        function construct(width, height, tiles) {
            numBoards++;
            boardSelf.id = numBoards;
            boardSelf.name = 'board' + numBoards;
            //TODO need to delete/garbage collect these boards
            self.boards[boardSelf.name] = boardSelf;

            boardSelf.width = width;
            boardSelf.height = height;
            boardSelf.tiles = tiles;
            for (var i = 0; i < boardSelf.tiles.length; i++) {
                var currTile = boardSelf.tiles[i];

                var x = boardSelf.getX(i);
                var y = boardSelf.getY(i);

                boardSelf.newTile(y, x, currTile);
            }
        }

        boardSelf.newTile = function (y, x, tile) {
            tile.yPos = y;
            tile.xPos = x;
            tile.tileRender = function () {
                var renderedData;
                if (typeof this['render'] === 'function') {
                    renderedData = $(this.render());
                }
                else {
                    renderedData = $('<div></div>');
                }
                renderedData.attr('onmousedown', 'gameon.boards.' + boardSelf.name + '.click(this)');
                renderedData.attr('data-yx', boardSelf.name + '-' + this.yPos + '-' + this.xPos);
                renderedData.css({position: 'relative'});
                return renderedData[0].outerHTML;
            };
            tile.reRender = function () {
                var renderedTile = boardSelf.getRenderedTile(this.yPos, this.xPos);
                var container = renderedTile.parent();
                container.html(tile.tileRender());
            };

            tile.isTile = function () {
                return typeof this['render'] === 'function';
            };
        };

        boardSelf.getY = function (i) {
            return Math.floor(i / boardSelf.width);
        };
        boardSelf.getX = function (i) {
            return i % boardSelf.width;
        };

        boardSelf.getTile = function (y, x) {
            return boardSelf.tiles[y * boardSelf.width + x];
        };
        boardSelf.setTile = function (y, x, tile) {
            boardSelf.tiles[y * boardSelf.width + x] = tile;
        };

        boardSelf.removeWhere = function (func) {
            for (var i = 0; i < boardSelf.tiles.length; i++) {
                if (func(boardSelf.tiles[i])) {
                    var x = boardSelf.getX(i);
                    var y = boardSelf.getY(i);

                    var newTile = {};
                    boardSelf.newTile(y, x, newTile);
                    boardSelf.setTile(y, x, newTile);
                    //TODOFIX calling things on both objects
                    newTile.reRender();
//                    boardSelf.render()
                }
            }
        };

        boardSelf.isFull = function () {
            var tiles = boardSelf.tiles;
            for (var i = 0; i < tiles.length; i++) {
                if (typeof tiles[i]['render'] === 'undefined') {
                    return false;
                }
            }
            return true;
        };


        boardSelf.getRenderedTile = function (y, x) {
            return $('[data-yx="' + boardSelf.name + '-' + y + '-' + x + '"]');
        };

        boardSelf.click = function (elm) {
            var yx = $(elm).attr('data-yx').split('-');
            var y = +yx[1];
            var x = +yx[2];
            var tile = boardSelf.getTile(y, x);
            if (typeof tile['click'] === 'function') {
                tile.click();
            }
        };

        boardSelf.render = function (target) {
            if (typeof target === 'undefined') {
                if (typeof boardSelf.target === 'undefined') {
                    target = '.gameon-board';
                }
                else {
                    target = boardSelf.target;
                }
            }
            boardSelf.target = target;
            var domtable = ['<table>'];
            for (var h = 0; h < boardSelf.height; h++) {
                domtable.push("<tr>");
                for (var w = 0; w < boardSelf.width; w++) {
                    var even = 'odd';
                    if ((h + w) % 2 === 0) {
                        even = 'even';
                    }
                    domtable.push('<td class="' + even + '">');

                    var tile = boardSelf.getTile(h, w);
                    if (typeof tile !== 'undefined' && typeof tile['tileRender'] === 'function') {
                        domtable.push(tile.tileRender());
                    }

                    domtable.push("</td>");
                }
                domtable.push("</tr>");
            }
            domtable.push('</table>');

            $(target).html(domtable.join(''));
        };

        boardSelf.getContainerAt = function (y, x) {
            return $(boardSelf.target + ' tr:nth-child(' + (y + 1) + ') td:nth-child(' + (x + 1) + ')');
        };

        boardSelf.falldown = function (newTiles, callback) {

            //work out the required state column by column and set the internal data to that straight away.
            //animate towards that state
            //refreshui
            //TODO better way of getting tiledist eg 60 if $(window).width()<suu
            var tiledist = $(boardSelf.target + ' td').outerHeight();
            var falltime = 0.20;
            var maxNumDeletedPerColumn = 0;
            var newTileNum = 0;
            for (var w = 0; w < boardSelf.width; w++) {

                var numDeleted = 0;
                for (var h = boardSelf.height - 1; h >= 0; h--) {
                    var currTile = boardSelf.getTile(h, w);

                    var renderedTile = boardSelf.getRenderedTile(currTile.yPos, currTile.xPos);
                    if (currTile.deleted) {
                        numDeleted += 1;
                        if (numDeleted > maxNumDeletedPerColumn) {
                            maxNumDeletedPerColumn = numDeleted;
                        }
                        renderedTile.remove();
                    } else {
                        if (numDeleted == 0) {
                            continue;
                        }
                        var endPos = h + numDeleted;
                        var fallDistance = numDeleted * tiledist;
                        var container = boardSelf.getContainerAt(endPos, w);

                        var renderedTile = boardSelf.getRenderedTile(h, w);
                        renderedTile.attr('data-yx', boardSelf.name + '-' + endPos + '-' + w);
                        container.html(renderedTile);

                        renderedTile = boardSelf.getRenderedTile(endPos, w);
                        renderedTile.css({top: -fallDistance});
                        renderedTile.animate({top: '+=' + fallDistance}, tiledist / (falltime / numDeleted));


                        //update our model
                        currTile.yPos = endPos;
                        currTile.xPos = w;
                        boardSelf.setTile(endPos, w, currTile);
                    }
                }
                for (var h = 0; h < numDeleted; h++) {
                    var currNewTile = newTiles[newTileNum++];
                    boardSelf.newTile(h, w, currNewTile);

                    //update our model
                    currNewTile.yPos = h;
                    currNewTile.xPos = w;
                    boardSelf.setTile(h, w, currNewTile);

                    var container = boardSelf.getContainerAt(h, w);

                    var fallDistance = numDeleted * tiledist;

                    var renderedData = $(currNewTile.render());
                    renderedData.attr('onmousedown', 'gameon.boards.' + boardSelf.name + '.click(this)');
                    renderedData.attr('data-yx', boardSelf.name + '-' + h + '-' + w);
                    renderedData.css({position: 'relative'});
                    renderedData.css({top: -fallDistance});

                    container.html(renderedData[0].outerHTML);
                    var renderedTile = boardSelf.getRenderedTile(h, w);
                    renderedTile.animate({top: '+=' + fallDistance}, tiledist / (falltime / numDeleted));
                }

            }

            setTimeout(callback, maxNumDeletedPerColumn * falltime)
        };

        boardSelf.view = function () {
            //todo custom tileview with a proper contains method?
            return new self.ArrayView(boardSelf.tiles);
        };
        boardSelf.viewWhere = function (where) {
            var tiles = []
            for (var i = 0; i < boardSelf.tiles.length; i++) {
                var tile = boardSelf.tiles[i];
                if (where(tile)) {
                    tiles.push(tile);
                }
            }
            return new self.ArrayView(tiles);
        };
        boardSelf.viewOfWhere = function (of, where) {
            var tiles = []
            for (var i = 0; i < boardSelf.tiles.length; i++) {
                var tile = boardSelf.tiles[i];
                if (where(tile)) {
                    tiles.push(of(tile));
                }
            }
            return new self.ArrayView(tiles);
        };
        construct(width, height, tiles);
        return boardSelf;
    };

    self.ArrayView = function (arr) {
        var viewSelf = this;
        if (typeof arr === 'undefined') {
            arr = []
        }
        function construc() {
            viewSelf.arr = arr;
            viewSelf.largePrimes = [1298809, 1298951, 1299059, 1299203, 1299299, 1299379, 1299541, 1299689, 1299827];
            viewSelf.shuffle();
        }

        viewSelf.get = function (i) {
            return arr[i];
        };
        viewSelf.shuffledGet = function (i) {
            var idx = viewSelf.hash(i);
            return viewSelf.get(idx);
        };
        viewSelf.hash = function (i) {
            return (viewSelf.hashstart + (i * viewSelf.hashstep))
                % viewSelf.length();
        };
        viewSelf.length = function () {
            return arr.length;
        };
        viewSelf.shuffle = function () {
            viewSelf.primeIdx = self.math.numberBetween(0, viewSelf.largePrimes.length);
            viewSelf.hashstep = viewSelf.largePrimes[viewSelf.primeIdx] % viewSelf.length();
            viewSelf.hashstart = self.math.numberBetween(0, viewSelf.length());
        };
        viewSelf.contains = function (x) {
            return arr.indexOf(x) === -1;
        };
        construc();
        return viewSelf;
    };


    self.math = new (function () {
        var mathSelf = this;
        mathSelf.numberBetween = function (a, b) {
            return Math.floor(Math.random() * (b - a) + a);
        };

        mathSelf.NumberLine = function (low, high, step) {
            var lineSelf = new self.ArrayView();
//            $.extend(true, lineSelf, new self.ArrayView());
            //TODO support capping the number of digits?

            function construc() {
                lineSelf.low = low;
                lineSelf.high = high;
                lineSelf.step = step;
                lineSelf.shuffle();
            }

            lineSelf.get = function (i) {
                return lineSelf.low + (lineSelf.step * i);
            };
            lineSelf.length = function () {
                return +((lineSelf.high - lineSelf.low) / step);
            };
            lineSelf.contains = function (x) {
                function fromFP(y) {
                    return Math.round(y * 100000);
                }

                return x >= lineSelf.low && x < lineSelf.high &&
                    fromFP(x) % fromFP(lineSelf.step) == 0;
            };
            construc();
            return lineSelf;
        };

        mathSelf.round = function (num, numDecimalPlaces) {
            var tx = Math.pow(10, numDecimalPlaces);
            return Math.round((num + 0.00001) * tx) / tx;
        };

        /**
         * a bit hack
         * @param x
         * @param precision eg .1 .01 or .001 depending on the number of decimal places you want
         */
        mathSelf.precisionRound = function (x, precision) {
            var str = '' + precision;
            var numDecimalPlaces = 0;
            if (str.length >= 3) {
                numDecimalPlaces = str.length - 2;
            }
            return mathSelf.round(x, numDecimalPlaces)
        }

    })();


    self.StarBar = function (starrating) {
        $('.gameon-starbar .track').off('click mousedown mouseup mousemove');
        $('.gameon-starbar .highlight-track').off('click mousedown mouseup mousemove');

        var starSelf = this;
        starSelf.one = starrating[0];
        starSelf.two = starrating[1];
        starSelf.three = starrating[2];
        starSelf.end = starrating[3];
        var sliderWidth = $('.gameon-starbar .slider').outerWidth();

        var staronePos = (starSelf.one / starSelf.end) * sliderWidth;
        var startwoPos = (starSelf.two / starSelf.end) * sliderWidth;
        var starthreePos = (starSelf.three / starSelf.end) * sliderWidth;
        $('.gameon-starbar__star--one').css({left: staronePos});
        $('.gameon-starbar__star--two').css({left: startwoPos});
        $('.gameon-starbar__star--three').css({left: starthreePos});

        starSelf.numStars = 0;

        starSelf._score = 0;
        starSelf.setScore = function (score) {
            starSelf._score = score;
            starSelf.update()
        };
        starSelf.getScore = function () {
            return starSelf._score;
        };
        starSelf.hasWon = function () {
            return starSelf._score >= starSelf.one;
        };

        starSelf.update = function () {
            $('.highlight-track').html(starSelf.score);
            var conpleteRatio = starSelf._score / starSelf.end;
            $(".gameon-starbar [data-slider]").simpleSlider("setRatio", conpleteRatio);

            var numStars = 0;

            if (starSelf._score >= starSelf.one) {
                $('.gameon-starbar__star--one').addClass('gameon-star--shiny');
                numStars++;
            }
            else {
                $('.gameon-starbar__star--one').removeClass('gameon-star--shiny');
            }

            if (starSelf._score >= starSelf.two) {
                $('.gameon-starbar__star--two').addClass('gameon-star--shiny');
                numStars++;
            }
            else {
                $('.gameon-starbar__star--two').removeClass('gameon-star--shiny');
            }

            if (starSelf._score >= starSelf.three) {
                $('.gameon-starbar__star--three').addClass('gameon-star--shiny');
                numStars++;
            }
            else {
                $('.gameon-starbar__star--three').removeClass('gameon-star--shiny');
            }

            if (numStars > starSelf.numStars) {
                self.playSound('doublepoints');
            }
            starSelf.numStars = numStars;

            $('.gameon-starbar .highlight-track').html('<p class="gameon-starbar__score">' + starSelf._score + '</p>')
        };

        starSelf.render = function (target) {
            starSelf.target = target;
            var $starBar = $('.gameon-starbar-template .gameon-starbar').detach();
            $starBar.appendTo(starSelf.target);
            $(starSelf.target).bind('destroyed', function () {
                $(target + ' .gameon-starbar').detach().appendTo('.gameon-starbar-template');
                $('.gameon-starbar__star').removeClass('gameon-star--shiny');
                starSelf.update();
            });
//            $starBar.appendTo('.gameon-starbar-template');
        }
    };

    self.Stars = function (ratingScheme, score) {
        var starSelf = this;
        starSelf.ratingScheme = ratingScheme;
        starSelf.score = score;

        starSelf.render = function () {
            var output = ['<div class="gameon-stars">'];
            for (var i = 0; i < 3; i++) {
                var thresh = starSelf.ratingScheme[i];
                if (starSelf.score >= thresh) {
                    output.push('<span class="gameon-star gameon-star--shiny gameon-star--' + i + '"></span>');
                }
                else {
                    output.push('<span class="gameon-star gameon-star--' + i + '"></span>');
                }
            }
            output.push('</div>');
            return output.join('');
        }
    }

    self.unlock = function (target) {
        var button = $(target + ' button');
        button.removeAttr('disabled');
        button.find('.glyphicon-lock').remove();
    };
    self.isLocked = function (target) {
        var button = $(target + ' button');
        return button.attr('disabled');
    };

    self.shuffle = function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }

        return arr;
    };

    self.gotoLink = function (link) {

        if (!self.isInIFrame()) {
            var url = $(link).attr('href');
            window.location = url;
            return false;
        }
        return true
    };

    self.isInIFrame = function() {
        return window != window.top
    }

    return self;
})();

// Add things to default namespace D:
Object.keys = Object.keys || function (o) {
    var result = [];
    for (var name in o) {
        if (o.hasOwnProperty(name))
            result.push(name);
    }
    return result;
};

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
