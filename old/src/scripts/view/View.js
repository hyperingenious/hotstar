export default class View {
  _clearTopBanner() {
    document.querySelector(".top-banner")?.remove();
    console.log("Cleared Top banner");
    // document.querySelector(".top-banner").innerHTML = "";
  }
  _clearAfterHeader() {
    document.querySelector(".after-header").innerHTML = "";
  }
  renderError(errMessage = "Could not fetch the results") {
    const markup = `<div class= "error"><svg width="300" height="225" viewBox="0 0 300 225" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M219.711 158.966L223.792 158.813L225.813 158.737L227.626 158.584C229.976 158.279 232.244 157.63 234.305 156.599C236.366 155.606 238.221 154.269 239.747 152.665C241.272 151.1 242.468 149.267 243.333 147.281C244.158 145.334 244.611 143.31 244.694 141.209C244.776 139.147 244.447 137.123 243.704 135.176C243.333 134.221 242.88 133.305 242.344 132.426C242.22 132.197 242.097 131.968 241.932 131.777L241.478 131.166C241.313 130.975 241.19 130.746 241.025 130.555L240.489 129.983C239.087 128.493 237.438 127.233 235.542 126.317C235.047 126.126 234.594 125.897 234.14 125.706C233.687 125.515 233.151 125.362 232.697 125.209C232.244 125.056 231.708 124.98 231.213 124.866C230.718 124.751 230.182 124.713 229.729 124.636C229.605 124.636 229.482 124.598 229.358 124.598H228.987L228.245 124.56C227.75 124.522 227.255 124.522 226.761 124.56L226.019 124.598L224.988 124.675L222.968 124.827L206.725 125.897L190.482 127.042C185.082 127.424 179.681 127.768 174.239 128.188C163.397 128.99 152.596 129.753 141.753 130.632L125.51 131.892C120.11 132.312 114.709 132.694 109.267 133.267L105.227 133.648L103.207 133.878L102.177 133.992L101.682 134.03C101.517 134.03 101.393 134.069 101.105 134.069C88.0362 134.909 75.2151 130.67 65.6919 122.383C59.137 116.655 54.4373 109.4 52.0874 101.381C50.727 97.2184 50.0674 93.0178 50.0674 88.8173C50.0674 87.7481 50.1086 86.717 50.1498 85.6478C50.1911 84.5786 50.3147 83.5475 50.4796 82.4783C51.3866 76.0629 53.6952 69.8767 57.2819 64.3014C57.859 63.3468 58.5186 62.4685 59.1783 61.552C59.8379 60.6355 60.5387 59.7954 61.2808 58.9553C62.7237 57.2369 64.3315 55.6331 66.0217 54.1056C72.9476 47.9576 81.605 43.7188 90.9633 41.8095C92.1176 41.5804 93.3131 41.3513 94.5087 41.1985C95.7042 41.0458 96.8998 40.9312 98.0953 40.8166C98.6725 40.7785 99.2909 40.7403 99.868 40.7403L101.476 40.6639L103.496 40.5875C106.217 40.5112 108.896 40.4348 111.617 40.3966C117.018 40.282 122.46 40.2438 127.86 40.2438C138.703 40.2057 149.504 40.282 160.346 40.5112C163.067 40.5493 165.747 40.6257 168.468 40.7021L176.589 40.9312L192.832 41.504C203.674 41.8859 214.475 42.3059 225.318 42.6878L233.439 42.9933L234.47 43.0315H234.717H234.758L234.841 43.0697C234.965 43.1078 235.088 43.1078 235.253 43.146C235.336 43.146 235.377 43.1842 235.459 43.1842C235.542 43.1842 235.583 43.2224 235.665 43.2224C235.748 43.2606 235.789 43.2606 235.872 43.2606C235.954 43.2988 235.995 43.2988 236.078 43.2988C236.408 43.3752 236.696 43.4133 237.026 43.4515C237.191 43.4897 237.356 43.4897 237.562 43.4897H237.85C237.933 43.4897 238.057 43.4897 238.139 43.4897C238.551 43.4897 238.964 43.4133 239.335 43.337C239.788 43.2606 240.2 43.146 240.613 42.9933C241.066 42.8405 241.519 42.6496 241.932 42.4205C242.426 42.1914 242.88 41.9241 243.292 41.6186C243.746 41.2749 244.199 40.9312 244.611 40.5493C245.024 40.0911 245.395 39.6329 245.766 39.1364C246.137 38.6018 246.425 37.9908 246.673 37.418C246.92 36.7689 247.126 36.1197 247.25 35.4705C247.538 34.0194 247.538 32.5301 247.25 31.0409C246.92 29.3988 246.26 27.8332 245.353 26.3821C244.859 25.5802 244.282 24.8546 243.663 24.1673C243.004 23.4417 242.303 22.7543 241.478 22.1434C239.788 20.8068 237.85 19.7758 235.789 19.0502C234.8 18.6684 233.316 18.3629 231.955 18.0192L227.915 16.9882V12.4058L231.955 11.3747C233.357 11.031 234.552 10.6492 236.243 10.3819C237.892 10.1527 239.541 10 241.231 10C242.962 10 244.653 10.1146 246.384 10.3819C249.93 10.9165 253.351 12.0239 256.526 13.6277C259.865 15.3079 262.916 17.4846 265.472 20.0813C268.193 22.7925 270.419 25.9238 272.068 29.3225C272.892 31.079 273.593 32.912 274.129 34.745C274.665 36.6543 275.036 38.5636 275.283 40.5112C275.696 44.5589 275.407 48.6831 274.418 52.6545C273.346 56.7787 271.532 60.7119 269.058 64.2633C265.142 69.8003 259.824 74.3445 253.516 77.4759C251.372 78.5451 249.146 79.4234 246.838 80.1489C246.26 80.3399 245.683 80.4926 245.065 80.6453C244.447 80.7981 243.869 80.9508 243.292 81.0654C242.715 81.18 242.097 81.3327 241.478 81.4091L239.664 81.6764C238.469 81.8291 237.232 81.9437 235.995 82.0201L235.088 82.0583L234.387 82.0964L233.357 82.1346L225.235 82.4401C214.393 82.7838 203.592 83.2039 192.75 83.6239L176.507 84.1967L168.385 84.4258C165.664 84.5022 162.985 84.5786 160.264 84.6168C149.463 84.8459 138.62 84.9223 127.778 84.8841C122.377 84.8459 116.935 84.8077 111.535 84.7313C108.814 84.6931 106.134 84.6168 103.413 84.5404L101.393 84.464H101.187H101.064C100.981 84.464 100.899 84.4258 100.816 84.4258C100.486 84.4258 100.198 84.3876 99.9092 84.3876C99.2909 84.3876 98.6312 84.464 98.0541 84.6168C97.7243 84.6931 97.4357 84.8077 97.1059 84.8841C96.7761 84.9604 96.4463 85.1514 96.1577 85.3041C95.8279 85.4569 95.4981 85.6478 95.2095 85.8387C95.0446 85.9151 94.9209 86.0679 94.756 86.1442C94.5911 86.2206 94.4675 86.3734 94.3438 86.4879C94.0552 86.717 93.8078 86.9843 93.5605 87.2516C93.3131 87.5189 93.0658 87.8244 92.8597 88.1299C92.6535 88.4354 92.4474 88.7791 92.2825 89.1228C92.2 89.2755 92.1176 89.4665 92.0351 89.6574C91.9527 89.8483 91.9115 90.0393 91.829 90.2302C91.5817 91.0321 91.458 91.8722 91.4992 92.7123C91.4992 93.5906 91.6641 94.4307 91.9115 95.2708C92.0351 95.6909 92.2413 96.1491 92.4062 96.5692C92.6123 96.9892 92.8597 97.4475 93.107 97.8294C93.6429 98.7076 94.3025 99.5096 95.0858 100.235C95.9103 100.999 96.8173 101.648 97.8067 102.221C98.8786 102.832 100.033 103.252 101.228 103.557C101.352 103.596 101.517 103.596 101.641 103.596L102.135 103.634L103.166 103.748L105.186 103.977L109.226 104.359C114.627 104.894 120.069 105.314 125.469 105.734L141.712 106.994C152.513 107.834 163.356 108.636 174.198 109.438C179.599 109.858 184.999 110.202 190.441 110.584L206.684 111.729L222.927 112.799L224.947 112.951L225.977 113.028L227.255 113.142C228.121 113.219 228.946 113.333 229.77 113.486L231.007 113.715L231.625 113.83C231.831 113.868 232.038 113.944 232.244 113.982C233.068 114.211 233.852 114.441 234.676 114.708C235.501 114.975 236.243 115.319 236.985 115.624C237.727 115.93 238.469 116.388 239.211 116.77C239.953 117.152 240.613 117.648 241.272 118.068C246.59 121.696 250.383 126.889 252.073 132.808C252.238 133.534 252.444 134.259 252.568 134.985L252.857 137.2C252.898 137.925 252.898 138.689 252.939 139.415C252.939 139.606 252.939 139.797 252.939 139.987L252.898 140.56L252.815 141.668C252.527 144.608 251.62 147.472 250.259 150.107C246.096 158.05 237.603 163.243 228.121 163.701C227.379 163.701 226.596 163.74 225.854 163.74L223.834 163.663L219.752 163.51L219.711 158.966Z" fill="url(#paint0_linear_802_79609)"/>
<path d="M146.398 82.7779C146.885 82.2967 147.416 81.9468 147.992 81.6406C148.657 81.3343 149.366 81.1594 150.119 81.1594C153.485 81.1594 155.213 82.7342 155.213 85.9275C155.257 87.8086 154.371 89.6021 152.865 90.7395C151.27 92.0518 149.233 92.708 147.195 92.6642C144.271 92.6642 141.879 91.7456 140.063 89.9521C138.247 88.1585 137.361 85.7963 137.361 82.8654C137.361 78.0972 139.531 74.029 143.828 70.7044C148.037 67.5985 153.397 66.0237 159.953 66.0237C166.376 66.0237 171.559 67.511 175.457 70.5294C179.577 73.5915 181.659 77.616 181.659 82.6029C181.659 88.9022 178.514 93.6266 172.179 96.82C171.647 97.0387 171.071 97.3012 170.407 97.6074L168.192 98.526C165.268 99.7071 163.275 100.845 162.212 101.982C161.104 103.163 160.529 104.738 160.617 106.356C160.617 107.931 160.396 109.156 159.997 109.943C159.731 110.6 159.2 111.125 158.535 111.387C157.782 111.693 156.94 111.824 156.099 111.824C152.865 111.824 151.27 110.031 151.27 106.444C151.182 103.819 151.979 101.194 153.53 99.051C155.301 96.7325 158.491 94.3265 163.098 91.8331C166.819 89.7771 169.255 88.1585 170.363 86.8899C171.337 85.7963 171.825 84.309 171.825 82.3842C171.913 79.8033 170.673 77.3536 168.502 75.91C166.287 74.3352 163.364 73.5478 159.687 73.5478C155.877 73.5478 152.688 74.4664 150.03 76.3474C147.594 78.0097 146.398 80.022 146.398 82.3842V82.7779ZM156.896 125.954C155.169 125.998 153.485 125.342 152.201 124.16C149.676 121.754 149.631 117.817 152.023 115.368C152.068 115.324 152.156 115.237 152.201 115.193C153.441 113.968 155.169 113.312 156.896 113.355C158.624 113.312 160.307 113.968 161.547 115.193C164.072 117.642 164.072 121.667 161.592 124.117L161.547 124.16C160.307 125.342 158.624 125.998 156.896 125.954Z" fill="url(#paint1_linear_802_79609)"/>
<path d="M180.534 215.386H169.034C162.565 208.309 151.563 207.811 144.486 214.28C144.099 214.612 143.712 214.999 143.38 215.386H131.935C130.94 215.331 130.11 216.105 130.055 217.1C130 218.095 130.774 218.925 131.769 218.98C131.824 218.98 131.88 218.98 131.99 218.98H180.534C181.53 219.035 182.359 218.261 182.414 217.266C182.469 216.271 181.695 215.441 180.7 215.386C180.645 215.386 180.59 215.386 180.534 215.386Z" fill="black"/>
<path d="M161.626 150.862C161.626 147.876 159.193 145.499 156.263 145.499C153.332 145.499 150.899 147.932 150.899 150.862C150.899 153.847 153.332 156.225 156.263 156.225C159.193 156.225 161.626 153.847 161.626 150.862Z" fill="black"/>
<path d="M156.207 208.419C170.62 208.419 182.304 196.735 182.304 182.323C182.304 167.91 170.62 156.226 156.207 156.226C141.795 156.226 130.111 167.91 130.111 182.323C130.111 196.735 141.795 208.419 156.207 208.419Z" fill="url(#paint2_linear_802_79609)"/>
<path d="M156.207 157.885C169.698 157.885 180.645 168.832 180.645 182.323C180.645 195.813 169.698 206.761 156.207 206.761C142.717 206.761 131.77 195.813 131.77 182.323C131.77 168.832 142.717 157.94 156.207 157.885ZM156.207 156.226C141.777 156.226 130.111 167.892 130.111 182.323C130.111 196.753 141.777 208.419 156.207 208.419C170.638 208.419 182.304 196.753 182.304 182.323C182.304 167.892 170.638 156.226 156.207 156.226Z" fill="url(#paint3_linear_802_79609)"/>
<path d="M145.759 215.385H166.713C163.949 212.897 160.245 211.404 156.208 211.404C152.172 211.404 148.523 212.952 145.759 215.385Z" fill="url(#paint4_linear_802_79609)"/>
<path d="M156.208 209.745C161.295 209.745 165.829 211.901 169.036 215.385C165.884 211.957 161.295 209.745 156.208 209.745Z" fill="url(#paint5_linear_802_79609)"/>
<path d="M156.208 209.745C151.121 209.745 146.532 211.901 143.381 215.385C146.588 211.957 151.121 209.745 156.208 209.745Z" fill="url(#paint6_linear_802_79609)"/>
<path d="M143.381 215.385H145.758C148.523 212.897 152.227 211.404 156.208 211.404C160.244 211.404 163.893 212.897 166.713 215.385H169.09C165.884 211.901 161.35 209.745 156.263 209.745C151.121 209.745 146.588 211.957 143.381 215.385Z" fill="url(#paint7_linear_802_79609)"/>
<path d="M143.381 215.385H145.758C148.523 212.897 152.227 211.404 156.208 211.404C160.244 211.404 163.893 212.897 166.713 215.385H169.09C165.884 211.901 161.35 209.745 156.263 209.745C151.121 209.745 146.588 211.957 143.381 215.385Z" fill="url(#paint8_linear_802_79609)"/>
<path d="M132.046 215.232H180.517C181.511 215.232 182.339 216.121 182.339 217.187C182.339 218.253 181.511 219.141 180.517 219.141H132.046C131.052 219.141 130.224 218.253 130.224 217.187C130.224 216.121 131.052 215.232 132.046 215.232Z" fill="url(#paint9_linear_802_79609)"/>
<path d="M157.314 209.746H155.158C143.492 209.746 131.826 203.498 124.528 194.376C122.814 192.219 118.888 188.349 117.008 186.359C114.797 184.092 107.941 177.457 107.941 177.457H204.642C204.642 177.457 196.625 185.861 193.529 188.791C192.091 190.174 189.216 192.883 188 194.376C180.591 203.443 168.98 209.746 157.314 209.746ZM226.979 158.327H217.58C214.981 158.327 212.493 159.377 210.669 161.202L194.469 177.457H204.587L214.594 167.45C216.419 165.625 218.907 164.575 221.505 164.575H226.979V158.327ZM91.7408 169.993H94.0077C98.0438 169.993 101.914 171.596 104.734 174.471L107.83 177.512H117.948L108.659 168.334C105.84 165.459 101.969 163.856 97.9333 163.856H91.7408V169.993ZM93.6207 178.121H85.1061C82.8392 178.176 80.9594 176.462 80.9041 174.195C80.8488 171.928 82.5628 170.048 84.8297 169.993C84.9402 169.993 85.0508 169.993 85.1061 169.993H91.7408V163.801H85.1061C79.4113 163.801 74.8223 168.39 74.8223 174.084C74.8223 179.779 79.4113 184.368 85.1061 184.368H93.6207V178.121Z" fill="url(#paint10_linear_802_79609)"/>
<path d="M90.0822 165.402H97.9333C101.527 165.402 105.01 166.84 107.498 169.383L113.912 175.797H108.494L105.895 173.254C102.743 170.102 98.4309 168.333 94.0077 168.333H85.1061C81.9546 168.222 79.3007 170.71 79.1901 173.862C79.0796 177.013 81.5676 179.667 84.7191 179.778C84.8297 179.778 84.9402 179.778 85.0508 179.778H91.9067V182.653H85.0508C80.2959 182.653 76.4257 178.783 76.4257 174.028C76.4257 169.273 80.2959 165.402 85.0508 165.402H90.0822ZM91.7408 163.799H85.1061C79.4113 163.799 74.8223 168.388 74.8223 174.083C74.8223 179.778 79.4113 184.367 85.1061 184.367H93.6207V178.119H85.1061C82.8392 178.174 80.9594 176.46 80.9041 174.194C80.8488 171.927 82.5628 170.047 84.8297 169.992C84.9402 169.992 85.0508 169.992 85.1061 169.992H94.0077C98.0438 169.992 101.914 171.595 104.734 174.47L107.83 177.511H117.948L108.659 168.333C105.84 165.458 101.969 163.854 97.9333 163.854L91.7408 163.799Z" fill="url(#paint11_linear_802_79609)"/>
<path d="M158.474 205.711H156.318C144.652 205.711 132.93 199.463 125.687 190.34C123.973 188.184 120.048 184.258 118.168 182.323" stroke="url(#paint12_linear_802_79609)" stroke-width="1.65868"/>
<path d="M156.208 156.225C159.17 156.225 161.571 153.824 161.571 150.862C161.571 147.9 159.17 145.499 156.208 145.499C153.246 145.499 150.845 147.9 150.845 150.862C150.845 153.824 153.246 156.225 156.208 156.225Z" fill="url(#paint13_linear_802_79609)"/>
<path d="M156.208 147.157C158.254 147.157 159.912 148.816 159.912 150.862C159.912 152.908 158.254 154.566 156.208 154.566C154.162 154.566 152.503 152.908 152.503 150.862C152.503 148.816 154.162 147.157 156.208 147.157ZM156.208 145.499C153.222 145.499 150.845 147.932 150.845 150.862C150.845 153.847 153.277 156.225 156.208 156.225C159.193 156.225 161.571 153.792 161.571 150.862C161.571 147.876 159.193 145.499 156.208 145.499Z" fill="url(#paint14_linear_802_79609)"/>
<path d="M226.978 159.156H217.413C215.146 159.156 212.934 160.041 211.331 161.699L194.799 178.286H150.899" stroke="url(#paint15_linear_802_79609)" stroke-width="1.65868"/>
<path d="M93.785 188.847C96.7469 188.847 99.148 186.446 99.148 183.484C99.148 180.522 96.7469 178.121 93.785 178.121C90.823 178.121 88.4219 180.522 88.4219 183.484C88.4219 186.446 90.823 188.847 93.785 188.847Z" fill="url(#paint16_linear_802_79609)"/>
<path d="M93.785 179.779C95.8307 179.779 97.4894 181.438 97.4894 183.484C97.4894 185.529 95.8307 187.188 93.785 187.188C91.7393 187.188 90.0806 185.529 90.0806 183.484C90.0806 181.438 91.7393 179.779 93.785 179.779ZM93.785 178.121C90.7993 178.121 88.4219 180.498 88.4219 183.484C88.4219 186.469 90.7993 188.847 93.785 188.847C96.7706 188.847 99.148 186.469 99.148 183.484C99.148 180.498 96.7153 178.121 93.785 178.121Z" fill="url(#paint17_linear_802_79609)"/>
<path d="M292.985 219.799C292.985 220.143 291.68 220.415 290.032 220.415L12.5549 220.444C10.9065 220.444 9.60156 220.171 9.60156 219.828V219.756C9.60156 219.413 10.9065 219.141 12.4862 219.141L289.963 219.169C291.68 219.198 292.985 219.47 292.985 219.799Z" fill="url(#paint18_radial_802_79609)"/>
<defs>
<linearGradient id="paint0_linear_802_79609" x1="162.762" y1="148.105" x2="162.762" y2="4.78849" gradientUnits="userSpaceOnUse">
<stop stop-color="#1333A9" stop-opacity="0.38"/>
<stop offset="1" stop-color="#122874" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_802_79609" x1="159.483" y1="125.952" x2="159.483" y2="66.0237" gradientUnits="userSpaceOnUse">
<stop stop-color="#2D385F" stop-opacity="0.43"/>
<stop offset="1" stop-color="#3F486C"/>
</linearGradient>
<linearGradient id="paint2_linear_802_79609" x1="156.224" y1="178.541" x2="156.224" y2="158.72" gradientUnits="userSpaceOnUse">
<stop stop-color="#151B30"/>
<stop offset="1" stop-color="#2F3755"/>
</linearGradient>
<linearGradient id="paint3_linear_802_79609" x1="156.207" y1="208.43" x2="156.207" y2="156.248" gradientUnits="userSpaceOnUse">
<stop stop-color="#1F253D" stop-opacity="0"/>
<stop offset="0.33" stop-color="#20263E" stop-opacity="0.02"/>
<stop offset="0.49" stop-color="#232943" stop-opacity="0.07"/>
<stop offset="0.62" stop-color="#292F4A" stop-opacity="0.16"/>
<stop offset="0.72" stop-color="#303754" stop-opacity="0.3"/>
<stop offset="0.82" stop-color="#3A4262" stop-opacity="0.47"/>
<stop offset="0.9" stop-color="#475073" stop-opacity="0.69"/>
<stop offset="0.98" stop-color="#555F86" stop-opacity="0.93"/>
<stop offset="1" stop-color="#59638B"/>
</linearGradient>
<linearGradient id="paint4_linear_802_79609" x1="156.219" y1="221.931" x2="156.219" y2="211.349" gradientUnits="userSpaceOnUse">
<stop stop-color="#272E48"/>
<stop offset="1" stop-color="#151B30"/>
</linearGradient>
<linearGradient id="paint5_linear_802_79609" x1="162.641" y1="221.931" x2="162.641" y2="211.349" gradientUnits="userSpaceOnUse">
<stop stop-color="#272E48"/>
<stop offset="1" stop-color="#151B30"/>
</linearGradient>
<linearGradient id="paint6_linear_802_79609" x1="133.399" y1="228.961" x2="158.015" y2="204.345" gradientUnits="userSpaceOnUse">
<stop stop-color="#59638B"/>
<stop offset="1" stop-color="#1F253D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint7_linear_802_79609" x1="156.219" y1="221.931" x2="156.219" y2="211.349" gradientUnits="userSpaceOnUse">
<stop stop-color="#272E48"/>
<stop offset="1" stop-color="#151B30"/>
</linearGradient>
<linearGradient id="paint8_linear_802_79609" x1="138.026" y1="233.588" x2="162.642" y2="208.972" gradientUnits="userSpaceOnUse">
<stop stop-color="#59638B"/>
<stop offset="1" stop-color="#1F253D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint9_linear_802_79609" x1="130.246" y1="217.184" x2="182.345" y2="217.184" gradientUnits="userSpaceOnUse">
<stop stop-color="#2F3755"/>
<stop offset="1" stop-color="#151B30"/>
</linearGradient>
<linearGradient id="paint10_linear_802_79609" x1="150.912" y1="158.332" x2="150.912" y2="209.752" gradientUnits="userSpaceOnUse">
<stop stop-color="#2F3755"/>
<stop offset="1" stop-color="#151B30"/>
</linearGradient>
<linearGradient id="paint11_linear_802_79609" x1="90.7453" y1="161.078" x2="99.1943" y2="184.296" gradientUnits="userSpaceOnUse">
<stop stop-color="#59638B"/>
<stop offset="0.24" stop-color="#454E70" stop-opacity="0.66"/>
<stop offset="0.47" stop-color="#353C5A" stop-opacity="0.37"/>
<stop offset="0.68" stop-color="#292F4A" stop-opacity="0.17"/>
<stop offset="0.86" stop-color="#222840" stop-opacity="0.04"/>
<stop offset="1" stop-color="#1F253D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint12_linear_802_79609" x1="117.549" y1="194.163" x2="158.496" y2="194.163" gradientUnits="userSpaceOnUse">
<stop stop-color="#1F253D" stop-opacity="0"/>
<stop offset="0.18" stop-color="#323A57" stop-opacity="0.33"/>
<stop offset="0.4" stop-color="#475073" stop-opacity="0.69"/>
<stop offset="0.57" stop-color="#545E84" stop-opacity="0.92"/>
<stop offset="0.66" stop-color="#59638B"/>
<stop offset="0.71" stop-color="#576188" stop-opacity="0.97"/>
<stop offset="0.77" stop-color="#515B81" stop-opacity="0.87"/>
<stop offset="0.83" stop-color="#485174" stop-opacity="0.71"/>
<stop offset="0.9" stop-color="#3B4363" stop-opacity="0.49"/>
<stop offset="0.96" stop-color="#2B314D" stop-opacity="0.2"/>
<stop offset="1" stop-color="#1F253D" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint13_linear_802_79609" x1="156.224" y1="146.654" x2="156.224" y2="157.414" gradientUnits="userSpaceOnUse">
<stop stop-color="#2F3755"/>
<stop offset="1" stop-color="#151B30"/>
</linearGradient>
<linearGradient id="paint14_linear_802_79609" x1="156.957" y1="156.201" x2="155.459" y2="145.545" gradientUnits="userSpaceOnUse">
<stop stop-color="#1F253D" stop-opacity="0"/>
<stop offset="0.14" stop-color="#212740" stop-opacity="0.04"/>
<stop offset="0.32" stop-color="#282F49" stop-opacity="0.15"/>
<stop offset="0.52" stop-color="#333A58" stop-opacity="0.34"/>
<stop offset="0.74" stop-color="#424B6C" stop-opacity="0.61"/>
<stop offset="0.96" stop-color="#565F86" stop-opacity="0.94"/>
<stop offset="1" stop-color="#59638B"/>
</linearGradient>
<linearGradient id="paint15_linear_802_79609" x1="150.927" y1="168.718" x2="226.978" y2="168.718" gradientUnits="userSpaceOnUse">
<stop stop-color="#1F253D" stop-opacity="0"/>
<stop offset="0.14" stop-color="#212740" stop-opacity="0.04"/>
<stop offset="0.32" stop-color="#282F49" stop-opacity="0.15"/>
<stop offset="0.52" stop-color="#333A58" stop-opacity="0.34"/>
<stop offset="0.74" stop-color="#424B6C" stop-opacity="0.61"/>
<stop offset="0.96" stop-color="#565F86" stop-opacity="0.94"/>
<stop offset="1" stop-color="#59638B"/>
</linearGradient>
<linearGradient id="paint16_linear_802_79609" x1="93.7739" y1="188.863" x2="93.7739" y2="178.104" gradientUnits="userSpaceOnUse">
<stop stop-color="#151B30"/>
<stop offset="1" stop-color="#2F3755"/>
</linearGradient>
<linearGradient id="paint17_linear_802_79609" x1="93.7684" y1="188.869" x2="93.7684" y2="178.11" gradientUnits="userSpaceOnUse">
<stop stop-color="#1F253D" stop-opacity="0"/>
<stop offset="0.33" stop-color="#20263E" stop-opacity="0.02"/>
<stop offset="0.49" stop-color="#232943" stop-opacity="0.07"/>
<stop offset="0.62" stop-color="#292F4A" stop-opacity="0.16"/>
<stop offset="0.72" stop-color="#303754" stop-opacity="0.3"/>
<stop offset="0.82" stop-color="#3A4262" stop-opacity="0.47"/>
<stop offset="0.9" stop-color="#475073" stop-opacity="0.69"/>
<stop offset="0.98" stop-color="#555F86" stop-opacity="0.93"/>
<stop offset="1" stop-color="#59638B"/>
</linearGradient>
<radialGradient id="paint18_radial_802_79609" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(152.508 219.141) scale(140.477 19779.3)">
<stop offset="0.28125" stop-color="#2E3652"/>
<stop offset="1" stop-color="#1A2037" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>
<h1>${errMessage}</h1></div>`;

    document.querySelector(".after-header").querySelector(".spinner").remove();

    document
      .querySelector(".after-header")
      .insertAdjacentHTML("beforeend", markup);
  }
  renderSpinner() {
    const markup = `
        <svg class="spinner" viewBox="0 0 200 200" fill="none"><defs><linearGradient id="part1"><stop offset="0%" stop-color="#09194d00"></stop><stop offset="100%" stop-color="#09194d00"></stop></linearGradient><linearGradient id="part2"><stop offset="0%" stop-color="#09194D"></stop><stop offset="100%" stop-color="#09194d00"></stop></linearGradient><linearGradient id="part3" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#062794"></stop><stop offset="100%" stop-color="#09194D"></stop></linearGradient><linearGradient id="part4"><stop offset="0%" stop-color="#062794"></stop><stop offset="100%" stop-color="#095AE5"></stop></linearGradient><linearGradient id="part5" gradientTransform="rotate(45)"><stop offset="0%" stop-color="#095AE5"></stop><stop offset="100%" stop-color="#0FFFFF"></stop></linearGradient><linearGradient id="part6" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#0FFFFF"></stop><stop offset="100%" stop-color="#FFFFFF"></stop></linearGradient><linearGradient id="part7" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#f6ffff"></stop><stop offset="100%" stop-color="#FFFFFF"></stop></linearGradient></defs><g stroke="currentColor" stroke-width="16"><path stroke="url(#part1)" d=" M 184 100 A 84 84 0 0 1 126 180" stroke-linecap="round"></path><path stroke="url(#part2)" d=" M 126 180 A 84 84 0 0 1 32 149" stroke-dasharray="106" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.4; 0.5; 0.6; 1" values="106; 106; 212; 106; 106" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part3)" d=" M 32 149 A 84 84 0 0 1 32 51" stroke-dasharray="105" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.3; 0.4; 0.6; 0.7;  1" values="105; 105; 210; 210; 105; 105" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part4)" d=" M 32 51 A 84 84 0 0 1 126 20" stroke-dasharray="106" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.2; 0.3; 0.7; 0.8; 1" values="106; 106; 212; 212; 106; 106	" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part5)" d=" M 126 20 A 84 84 0 0 1 180 74" stroke-dasharray="80" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.1; 0.2; 0.8; 0.9; 1" values="80; 80; 160; 160; 80; 80" dur="2.6s" repeatCount="indefinite"></animate></path><path stroke="url(#part7)" stroke-linecap="round" d=" M 184 97 A 84 84 0 0 1 184 99"></path><path stroke="url(#part6)" d=" M 180 74 A 84 84 0 0 1 184 100" stroke-dasharray="25" stroke-linecap="round"><animate attributeName="strokeDashoffset" keyTimes="0; 0.1; 0.9; 1" values="35; 50; 50; 35" dur="2.6s" repeatCount="indefinite"></animate></path></g></svg>
    `;
    document
      .querySelector(".after-header")
      .insertAdjacentHTML("beforeend", markup);
  }
}