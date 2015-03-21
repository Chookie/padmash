angular.module('app')
        .controller('mvMainCtrl', ['$scope',
        function ($scope) {
            $scope.stories = [
                {name: 'C# for Sociopaths', favourite: true, published: new Date('10/5/2013')},
                {name: 'C# for Non-Sociopaths', favourite: true, published: new Date('10/12/2013')},
                {name: 'Super Duper Expert C#', favourite: false, published: new Date('10/1/2013')},
                {name: 'Visual Basic for Visual Basic Developers', favourite: false, published: new Date('7/12/2013')},
                {name: 'Pedantic C++', favourite: true, published: new Date('1/1/2013')},
                {name: 'JavaScript for People over 20', favourite: true, published: new Date('10/13/2013')},
                {name: 'Maintainable Code for Cowards', favourite: true, published: new Date('3/1/2013')},
                {name: 'A Survival Guide to Code Reviews', favourite: true, published: new Date('2/1/2013')},
                {name: 'How to Job Hunt Without Alerting your Boss', favourite: true, published: new Date('10/7/2013')},
                {name: 'How to Keep your Soul and go into Management', favourite: false, published: new Date('8/1/2013')},
                {name: 'Telling Recruiters to Leave You Alone', favourite: false, published: new Date('11/1/2013')},
                {name: "Writing Code that Doesn't Suck", favourite: true, published: new Date('10/13/2013')},
                {name: 'Code Reviews for Jerks', favourite: false, published: new Date('10/1/2013')},
                {name: 'How to Deal with Narcissistic Coworkers', favourite: true, published: new Date('2/15/2013')},
                {name: 'Death March Coding for Fun and Profit', favourite: true, published: new Date('7/1/2013')}
            ]
        }
    ]);