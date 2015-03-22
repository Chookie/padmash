angular.module('app')
        .controller('mvMainCtrl', ['$scope',
        function ($scope) {
            $scope.stories = [
                {name: 'C# for Sociopaths', favourite: true, published: new Date('10/5/2013'), author: 'Alison Johnston', stars:5},
                {name: 'C# for Non-Sociopaths', favourite: true, published: new Date('10/12/2013'), author: 'Zoe Hale', stars:5},
                {name: 'Super Duper Expert C#', favourite: false, published: new Date('10/1/2013'), author: 'Alex Hale', stars:5},
                {name: 'Visual Basic for Visual Basic Developers', favourite: false, published: new Date('7/12/2013'), author: 'Big Simon', stars:1},
                {name: 'Pedantic C++', favourite: true, published: new Date('1/1/2013'), author: 'Liz the amazing', stars:3},
                {name: 'JavaScript for People over 20', favourite: true, published: new Date('10/13/2013'), author: 'Alison Johnston', stars:3},
                {name: 'Maintainable Code for Cowards', favourite: true, published: new Date('3/1/2013'), author: 'Hale Simon', stars:2},
                {name: 'A Survival Guide to Code Reviews', favourite: true, published: new Date('2/1/2013'), author: 'Big Simon', stars:2},
                {name: 'How to Job Hunt Without Alerting your Boss', favourite: true, published: new Date('10/7/2013'), author: 'Alex Hale', stars:5},
                {name: 'How to Keep your Soul and go into Management', favourite: false, published: new Date('8/1/2013'), author: 'Ali Chook', stars:3},
                {name: 'Telling Recruiters to Leave You Alone', favourite: false, published: new Date('11/1/2013'), author: 'Zoe Hale', stars:5},
                {name: "Writing Code that Doesn't Suck", favourite: true, published: new Date('10/13/2013'), author: 'Alex Hale', stars:5},
                {name: 'Code Reviews for Jerks', favourite: false, published: new Date('10/1/2013'), author: 'Liz the Amazing', stars:3},
                {name: 'How to Deal with Narcissistic Coworkers', favourite: true, published: new Date('2/15/2013'), author: 'Zoe Hale', stars:5},
                {name: 'Death March Coding for Fun and Profit', favourite: true, published: new Date('7/1/2013'), author: 'Alex Hale', stars:5}
            ];
            $scope.getNumber = function(num) {
                return new Array(num);
            }
        }
    ]);