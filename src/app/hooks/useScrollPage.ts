interface PropsType{
  event: any;
  href: any
}

export function useScrollPage({ event, href }: PropsType) {
  event.preventDefault();
  const section = document.querySelector(href);

  const initPosition = section?.offsetTop;

  window.scrollTo({
    top: initPosition - 88,
    behavior: "smooth",
  });
}
