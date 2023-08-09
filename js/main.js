const numberInput = document.getElementById("themSo");
const addNumber = document.getElementById("btnThem");
const stringTotal = document.getElementById("txtLoai");
const tongSoDuongBTN = document.getElementById("btnTong");
const numberList = [];
addNumber.addEventListener("click", (e) => {
  if (numberInput.value === "") {
    return;
  }
  numberList.push(numberInput.value);
  let stringResult = "";
  for (let index = 0; index < numberList.length; index++) {
    if (index === 0) {
      stringResult += numberList[0];
    } else {
      stringResult += `, ${numberList[index]}`;
    }
  }
  stringTotal.innerHTML = stringResult;
});
// tổng số dương
const tongSoDuong = () => {
  let total = 0;
  for (let index = 0; index < numberList.length; index++) {
    console.log(numberList[index]);
    total += Number(numberList[index]);
  }
  return total;
};

tongSoDuongBTN.addEventListener("click", () => {
  const result = tongSoDuong();
  document.getElementById("txtTong").innerHTML = result;
});
// đếm số dương
const demSoDuong = () => {
  let total = 0;
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] >= 0) {
      total++;
    }
  }
  return total;
};

document.getElementById("btnDem").addEventListener("click", () => {
  const result = demSoDuong();
  document.getElementById("txtDem").innerHTML = result;
});
// tìm số nhỏ nhất
const timSoNho = () => {
  let Min = numberList[0];
  var index = 0;
  for (let i = 1; i <= numberList.length; i++) {
    if (numberList[i] < Min) {
      Min = numberList[i];
    }
  }
  return Min;
};

document.getElementById("btnTimNho").addEventListener("click", () => {
  const result = timSoNho();
  document.getElementById("txtTimSoNho").innerHTML = result;
});
// số dương nhỏ nhất
const soDuongNhoNhat = () => {
  const arraySoDuong = [];
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] >= 0) {
      arraySoDuong.push(numberList[index]);
    }
  }
  let min = arraySoDuong[0];
  for (let index = 1; index < arraySoDuong.length; index++) {
    if (arraySoDuong[index] < min) {
      min = arraySoDuong[index];
    }
  }
  return min;
};

document.getElementById("btnSoDuongNho").addEventListener("click", () => {
  const result = soDuongNhoNhat();
  document.getElementById("txtSoDuongNho").innerHTML = result;
});

// số chặn cuối cùng
const soChanCuoiCung = () => {
  let soChanCuoiCung = 0;
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] % 2 === 0) {
      soChanCuoiCung = numberList[index];
    }
  }

  return soChanCuoiCung;
};

document.getElementById("btnChanCuoiCung").addEventListener("click", () => {
  const result = soChanCuoiCung();
  document.getElementById("txtChanCuoiCung").innerHTML = result;
});

// sắp xếp mảng tăng dần
const sapXepMangTangDan = () => {
  numberList.sort();
  return numberList;
};
document.getElementById("btnMangTangDan").addEventListener("click", () => {
  const result = sapXepMangTangDan();
  document.getElementById("txtMangTangDan").innerHTML = result;
});

// đếm số nguyên
const demSoNguyen = () => {
  let total = 0;
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] % Number.parseInt(numberList[index]) === 0) {
      total++;
    }
  }
  return total;
};

document.getElementById("btnDemSoNguyen").addEventListener("click", () => {
  const result = demSoNguyen();
  document.getElementById("txtDemSoNguyen").innerHTML = result;
});

// so sánh số âm số dương
const soSanhSoAmSoDuong = () => {
  let tongSoAm = 0;
  let tongSoDuong = 0;
  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] > 0) {
      tongSoDuong++;
    }
    if (numberList[index] < 0) {
      tongSoAm++;
    }
  }

  if (tongSoAm > tongSoDuong) {
    return "So am > so duong";
  }
  return "So duong > so am";
};

document.getElementById("btnSoSanh").addEventListener("click", () => {
  const result = soSanhSoAmSoDuong();
  document.getElementById("txtSoSanh").innerHTML = result;
});
