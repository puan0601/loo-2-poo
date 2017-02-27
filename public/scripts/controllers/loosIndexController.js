angular
  .module('loo2poo')
  .controller('LoosIndexController', LoosIndexController);

// LoosIndexController.$inject = ['$http'];
function LoosIndexController () {
  var vm = this;
  vm.newLoo = {};
  vm.loos = [
    {
    name: 'Market/Powell',
    lat:'37.7882589',
    long: '-122.4104123',
    id: 0
  },
  {
    name: 'Market/7th (U. N. Plaza)',
    lat: '47.682012',
    long: '-122.212155',
    id: 1
  },
  {
    name: 'Grove/Larkin (Civic Center)',
    lat: '37.7917254',
    long: '-122.4192648',
    id: 2
  }];


  // $http({
  //   method: 'GET',
  //   url: db
  // }).then(function successCallback(response) {
  //   vm.books = response.data.books;
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });
  vm.createLoo = function() {
    vm.loos.push(vm.newLoo);
  };

  vm.editLoo = function(loo) {
    var index = vm.loos.indexOf(loo);
    vm.loos[index] = loo;
  };

  vm.deleteLoo = function(loo) {
    var index = vm.loos.indexOf(loo);
    vm.loos.splice(index,1);
  };
}
