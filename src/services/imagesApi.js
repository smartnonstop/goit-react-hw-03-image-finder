const fetchImages = (query, page = 1) => {
  return fetch('https://pixabay.com/api/?q='+query+'&page='+page+'&key=19918128-a5c1391d4f73220e8c7f95811&image_type=photo&orientation=horizontal&per_page=12')
  .then(res => res.json())
  .then(data => data.hits);

}

const objExport = {
  fetchImages
};

export default objExport;