export default function getAdditionalAnimeInfo(id, setState) {
  Axios.get(`/api/seasons/additional_info/${id}`).then((res) => {
    console.log(res.data[0]);
    setAdditionalInfoData(res.data[0]);
  });
}
