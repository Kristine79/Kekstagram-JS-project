'use strict';
(function () {

  // Фильтр новых фото

  var filterNew = function (data) {
    var countNewPhotos = 10;
    var newPhotos = data.slice();
    var filteredPhotos = [];

    // Случайные фото

    while (filteredPhotos.length < countNewPhotos) {
      var i = Math.floor(Math.random() * (newPhotos.length - 1));
      filteredPhotos.push(newPhotos[i]);
      newPhotos.splice(i, 1);
    }

    return filteredPhotos;
  };

  // Фильтр по комментариям

  var filterComments = function (data) {
    var newPhotos = data.slice();

    var commentsPhotos = newPhotos.sort(function (first, second) {
      return second.comments.length - first.comments.length;
    });

    return commentsPhotos;
  };

  // Фильтр по популярности

  var filterPopular = function (data) {
    return data;
  };

  window.filters = {
    filterNew: filterNew,
    filterComments: filterComments,
    filterPopular: filterPopular
  };
})();
