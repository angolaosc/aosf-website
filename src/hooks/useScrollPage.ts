interface PropsType {
  event: any;
  href: any;
}

export function useScrollPage({ event, href }: PropsType) {
  event.preventDefault();
  const section = document.querySelector(href);

  const startingPosition = section?.offsetTop;

  window.scrollTo({
    top: startingPosition - 120,
    behavior: "smooth",
  });
}
