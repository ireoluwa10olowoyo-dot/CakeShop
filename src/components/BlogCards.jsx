

function BlogCards({title,description,image, profile,author,date,minutes, theme}){

    return(
        <>
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" src={image} alt=""/>
        </div>
        <div class="flex flex-1 flex-col justify-between bg-white p-6">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">{theme}</a>
            </p>
            <a href="#" class="mt-2 block">
              <p class="text-xl font-semibold text-gray-900">{title}</p>
              <p class="mt-3 text-base text-gray-500"></p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <span class="sr-only">{author}</span>
                <img class="h-10 w-10 rounded-full" src={profile} alt=""/>
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">{author}</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time datetime="2020-03-16">{date}</time>
                <span aria-hidden="true">·</span>
                <span>{minutes} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
    

}
export default BlogCards