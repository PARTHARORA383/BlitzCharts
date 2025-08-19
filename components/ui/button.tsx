import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}



import styled from 'styled-components';

const ButtonUiVerse = ({height , width , text}:any) => {
  return (
    <StyledWrapper>
      <button className="button">
        <div className="bgContainer">
          <span>{text}</span>
          <span>{text}</span>
        </div>
        <div className="arrowContainer">
          <svg width={width} height={height} viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z" fill="black" />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.2rem;
    background-color: yellow;
    cursor: pointer;
    box-shadow: 4px 6px 0px black;
    border: 4px solid;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    z-index: 100;
    transition: box-shadow 250ms, transform 250ms, filter 50ms;
  }
  button:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 3px 0px black;
  }
  button:active {
    filter: saturate(0.75);
  }
  button::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: pink;
    z-index: -1;
    transform: translateX(-100%);
    transition: transform 250ms;
  }
  button:hover::after {
    transform: translateX(0);
  }
  .bgContainer {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
    max-width: 41%; /* adjust this if the button text is not proper */
    font-size: 1.1em;
    font-weight: 600;
  }
  .bgContainer span {
    position: relative;
    transform: translateX(-100%);
    transition: all 250ms;
  }
  .button:hover .bgContainer > span {
    transform: translateX(0);
  }
  .arrowContainer {
    padding: 0.8rem;
    margin-inline-end: 1em;
    border: 4px solid;
    border-radius: 50%;
    background-color: pink;
    position: relative;
    overflow: hidden;
    transition: transform 250ms, background-color 250ms;
    z-index: 100;
  }
  .arrowContainer::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: yellow;
    transform: translateX(-100%);
    z-index: -1;
    transition: transform 250ms ease-in-out;
  }
  button:hover .arrowContainer::after {
    transform: translateX(0);
  }
  button:hover .arrowContainer {
    transform: translateX(5px);
  }
  button:active .arrowContainer {
    transform: translateX(8px);
  }
  .arrowContainer svg {
    vertical-align: middle;
  }`;




const GithubButton = () => {
  return (
    <button
      className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gray-200 text-black shadow hover:bg-gray-300 h-9 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-gray-400 hover:ring-offset-2"
    >
      {/* Shine effect */}
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-black opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />

      {/* GitHub Icon + Text */}
      <div className="flex items-center">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </svg>
        <span className="ml-1  text-black">Star on GitHub</span>
      </div>

      {/* Stars Counter */}
      <div className="ml-2 flex items-center gap-1 text-sm md:flex">
        <svg
          className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-500"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            clipRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            fillRule="evenodd"
          />
        </svg>
        <span className="inline-block tabular-nums tracking-wider font-display font-medium text-black">
          6
        </span>
      </div>
    </button>
  );
};







export { Button, buttonVariants , ButtonUiVerse , GithubButton}
