import request from '@/utils/request'

export function getAllProvince() {
  return request({
    url: '/bdc/chinaPlace/getAllProvince',
    method: 'post'
  })
}

export function getAllTownshipByFather(father) {
  return request({
    url: '/bdc/chinaPlace/getAllTownshipByFather',
    method: 'post',
    params: {father}
  })
}

export function getAllAreaByFather(father) {
  return request({
    url: '/bdc/chinaPlace/getAllAreaByFather',
    method: 'post',
    params: {father}
  })
}

export function getAllCityByFather(father) {
  return request({
    url: '/bdc/chinaPlace/getAllCityByFather',
    method: 'post',
    params: {father}
  })
}

/*export function updateArticle(data) {
  return request({
    url: '/bdc/chinaPlace/article/update',
    method: 'post',
    data
  })
}*/
