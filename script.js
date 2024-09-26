const day = 'sunday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Prepare theory videos');
    break;
  case 'tuesday':
    console.log('Write code examples');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Record videos');
    break;
  case 'friday':
    console.log('Record videos');
    console.log('Ask questions');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy');
    break;
  default:
    console.log('Not a valid day');
}
