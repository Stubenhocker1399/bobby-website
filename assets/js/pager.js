function flipPages(pager) {
  const pageDivs = pager.getElementsByClassName('page');

  const open = pager.getElementsByClassName('open')[0];

  const openIndex = Array.from(pageDivs).indexOf(open);

  Array.from(pageDivs).forEach(page => {
    page.classList.remove('open', 'closing');
  });

  pageDivs[openIndex].classList.add('closing');

  const nextIndex = (openIndex + 1) % pageDivs.length;

  pageDivs[nextIndex].classList.add('open');
}

const pagerDivs = document.getElementsByClassName('pager');
Array.from(pagerDivs).forEach(pager => {
  setInterval(() => flipPages(pager), 10000);
});
