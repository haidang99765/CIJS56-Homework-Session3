function createUser(data) { //thêm user vào DB
    firebase.firestore().collection('ReviewFilms').add(data);
}

// createUser({
//     name: 'Hiền',
//     age: 15,
//     address: 'TPHCM',
//     role: 'User',
//     film1: ['One Piece', 'Anime', 'https://www.youtube.com/watch?v=S8_YwFLCh4U&ab_channel=ONEPIECE%E5%85%AC%E5%BC%8FYouTube%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB'],
//     film2: ['Gaorangers', 'Scientific', 'https://www.youtube.com/watch?v=WA3A2w-vktw&ab_channel=Shout%21Factory'],
//     film3: ['Three Kingdoms', 'Historical', 'https://www.youtube.com/watch?v=aOP1YugqRDk&ab_channel=GameClipsAndTips'],
// });

function UpdateUser(id, data) { //thêm đánh giá của người dùng về phim vào DB
    firebase.firestore().collection('ReviewFilms').doc(id).update(data);
}
UpdateUser('Aip2yiZlhj8QbC3ahtES', {comment: 'Phim rất hay, xem rất nét'});
UpdateUser('TbCmEhZYxFoAmwzEaoyn', {comment: 'Phim Ong Bak trên mình tìm lâu lắm rồi, giờ mới tìm thấy để xem được'});
UpdateUser('gPmVSNr6Iii4u2ZaPl0Z', {comment: 'Phim 2012 nhìn chiến quá bạn ơi'});


