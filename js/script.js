// Nilai awal
let fx = [],
  method_value,
  h_value,
  result_value;

// Metode Simpson
// Simpson 1/3
function simpson_sepertiga(fx, h) {
  let m = fx.length;
  let sigma = fx[0] + fx[m - 1];

  for (let i = 1; i < m - 1; i++) {
    if (i % 2 == 1) {
      sigma = sigma + 4 * fx[i];
    } else {
      sigma = sigma + 2 * fx[i];
    }
  }

  return (sigma * h) / 3;
}

// Simpson 3/8
function simpson_3per8(fx, h) {
  let m = fx.length;
  let sigma = fx[0] + fx[m - 1];

  for (let i = 1; i < m - 1; i++) {
    if (i % 3 == 0) {
      sigma = sigma + 2 * fx[i];
    } else {
      sigma = sigma + 3 * fx[i];
    }
  }
  return (sigma * 3 * h) / 8;
}

// Input nilai
let fx_string = document.getElementById("fxString"),
  h_string = document.getElementById("hString"),
  button_process = document.getElementById("buttonProcess");

// Print nilai
let method_print = document.getElementById("methodPrint");
let h_print = document.getElementById("hPrint");
let result_print = document.getElementById("resultPrint");

// Print ke halaman
function print(method_value, h_value, result_value) {
  method_print.innerText = method_value;
  h_print.innerText = h_value;
  result_print.innerText = result_value;
}

// Cek apakah sudah diisi sesuai ketentuan
function isFilled(n, h_string) {
  if (n < 1 && h_string == "") {
    alert("Periksa kembali masukan f(x) dan h");
    return false;
  } else if (n < 1) {
    alert("Periksa kembali masukan f(x)");
    return false;
  } else if (h_string == "") {
    alert("Periksa kembali masukan h");
    return false;
  } else {
    return true;
  }
}

// Hapus koma di akhir
function without_last_comma(string) {
  let string_new = string.replace(/,*$/, "");
  return string_new;
}

button_process.addEventListener("click", function () {
  let fx_string_new = without_last_comma(fx_string.value);

  fx = fx_string_new.split(",").map((e) => parseFloat(e));
  n = fx.length - 1;
  h_value = parseFloat(h_string.value);

  if (isFilled(n, h_string.value)) {
    if (n % 2 == 0) {
      result_value = simpson_sepertiga(fx, h_value);
      method_value = "Simpson 1/3";
      print(method_value, h_value, result_value);
    } else if (n % 3 == 0) {
      result_value = simpson_3per8(fx, h_value);
      method_value = "Simpson 3/8";
      print(method_value, h_value, result_value);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  method_print.innerText = "-";
  h_print.innerText = "-";
  result_print.innerText = "-";
});
