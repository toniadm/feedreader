/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /*
     * RSS Feeds test suite
     *
     */
    describe('RSS Feeds', function() {
        /*
         * Test that allFeeds variable has been
         * defined and is not empty
         *
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*
         * Loop through each feed and ensure a
         * URL is defined and not empty.
         *
         */

        it('should have URL defined and not be empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /*
         * Loop through feed and check that
         * name is defined and not empty
         *
         */

        it('should have name defined and not be empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
               expect(allFeeds[i].name).toBeDefined();
               expect(allFeeds[i].name.length).not.toBe(0);
           }
        });
});


    /*
     * Menu test suite
     *
     */

        describe('The menu', function() {
            /*
             * Initialize body and menu variables
             *
             */

            let body = document.querySelector('body');
            let menu = document.querySelector('.menu-icon-link');

            /*
             * Test to ensure that the menu
             * is hidden by default
             *
             */

            it('menu hidden by default', function() {
                expect(body.classList.contains('menu-hidden')).toBe(true);
            });

            /*
             * Test to check that menu changes visibility
             *
             */

            it('check menu visibility when clicked', function() {
                /*
                 * Validate that menu displays when clicked
                 *
                 */

                menu.click();
                expect(body.classList.contains('menu-hidden')).toBe(false);

                /*
                 * Validate that menu is hidden when clicked
                 *
                 */

                menu.click();
                expect(body.classList.contains('menu-hidden')).toBe(true);

        });
    });

        /*
         * Initial Entries test suite
         *
         */

        describe('Initial Entries', function() {

            /*
             * Test that there is at least
             * one entry in the feed
             *
             */

            let multEntries = document.querySelectorAll('.feed .entry');

            beforeEach(function(done) {
                loadFeed(0, done);
        });

            it('check for at least one entry in feed', function() {
                expect(('.feed .entry').length).not.toBe(0);

            });

    });

        /*
         * New Feed Selection test suite
         *
         */

        describe('New Feed Selection', function() {

            /*
             * Initialize oldFeed and newFeed variables
             *
             */

            let oldFeed;
            let newFeed;

            beforeEach(function(done) {
              loadFeed(0, function() {
                oldFeed = document.querySelector(".feed").innerHTML;
                  loadFeed(1, function() {
                  done();
                });
              });
        });

            /*
             * Test that newFeed is different from oldFeed
             *
             */

            it("changes its loaded content", function(done) {
              let newFeed = document.querySelector(".feed").innerHTML;
              expect(oldFeed).not.toBe(newFeed);
              done();
            });
    });
}());
