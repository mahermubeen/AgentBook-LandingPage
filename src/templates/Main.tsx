import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Main = () => (
  <div id="wrapper">
    <div
      id="sec-1"
      style={{
        backgroundImage: 'url("/static/sec-1-bg.svg")',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container xl:px-[20px]">
        <div
          id="header"
          className="mx-[-66px] mb-[68px] flex items-center justify-between py-[22px] sm:mb-[25px] xl:mx-0"
        >
          <img
            src="/static/brand-logo.svg"
            alt="Company logo"
            className="cursor-pointer sm:w-[40%]"
          />
          <div className=" flex items-center justify-center gap-[20px]">
            <div className=" rounded-[5px] border border-white px-[12px] py-[10px] sm:hidden">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="outline-none">
                  <img
                    src="/static/canada-flag.svg"
                    alt="Company logo"
                    className="sm:w-[15px]"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="mt-[22px] ml-[38.5%] w-[200px] overflow-hidden rounded-[5px] bg-white px-[5.45px] py-[7px]">
                  <label className="mb-[26px] flex cursor-text items-center gap-[10px] rounded-[5px] border border-gray-800 px-[20px] py-[15px]">
                    <img src="/static/search-gray.svg" alt="Company logo" />
                    <input
                      type="text"
                      name="search-country"
                      placeholder="Search Country"
                      className="w-full text-sm font-normal text-gray-600 outline-none placeholder:text-gray-600"
                    />
                  </label>

                  <div className="country-scroll h-[352px] overflow-y-auto px-[20px]">
                    <p className="mb-[15px] text-xl font-normal text-gray-700">
                      A
                    </p>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag1.svg" alt="Company logo" />
                      <span className="text-sm font-normal text-gray-400">
                        Albania
                      </span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag2.svg" alt="Company logo" />
                      <span>Afghanistan</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag3.svg" alt="Company logo" />
                      <span>Algeria</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag4.svg" alt="Company logo" />
                      <span>Angola</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag5.svg" alt="Company logo" />
                      <span>Andorra</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag6.svg" alt="Company logo" />
                      <span>Argentina</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag7.svg" alt="Company logo" />
                      <span>Armenia</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag8.svg" alt="Company logo" />
                      <span>Australia</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag2.svg" alt="Company logo" />
                      <span>Afghanistan</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag3.svg" alt="Company logo" />
                      <span>Algeria</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag4.svg" alt="Company logo" />
                      <span>Angola</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag5.svg" alt="Company logo" />
                      <span>Andorra</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag6.svg" alt="Company logo" />
                      <span>Argentina</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag7.svg" alt="Company logo" />
                      <span>Armenia</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="my-[15px] flex cursor-pointer items-center gap-[10px]">
                      <img src="/static/flag8.svg" alt="Company logo" />
                      <span>Australia</span>
                    </DropdownMenu.Item>
                  </div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
            <div className=" flex items-center justify-center gap-[26px] rounded-[5px] border border-white py-[10px] px-[12px] sm:gap-[15px] sm:p-[7px]">
              <img
                src="/static/Vector.svg"
                alt="Company logo"
                className="cursor-pointer sm:w-[17px]"
              />

              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="outline-none">
                  <img
                    src="/static/Ellipse 110.svg"
                    alt="Company logo"
                    className="cursor-pointer sm:w-[20px]"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="mt-[15px] ml-[15%] w-[200px] overflow-hidden rounded-[5px] bg-white sm:ml-0 sm:mt-[-52px] sm:h-screen sm:w-screen">
                  <DropdownMenu.Item className="outline-none">
                    <div className="group flex cursor-pointer items-center gap-[10px] py-[10px] px-[15px]">
                      <img
                        src="/static/user-black.svg"
                        alt="Company logo"
                        className=" cursor-pointer group-hover:hidden"
                      />
                      <img
                        src="/static/user-purple.svg"
                        alt="Company logo"
                        className="hidden cursor-pointer group-hover:block"
                      />
                      <span className="text-sm font-normal text-black group-hover:text-purple-400">
                        My Profile
                      </span>
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="outline-none">
                    <div className="group flex cursor-pointer items-center gap-[10px] py-[10px] px-[15px]">
                      <img
                        src="/static/lock-black.svg"
                        alt="Company logo"
                        className="cursor-pointer group-hover:hidden"
                      />
                      <img
                        src="/static/lock-purple.svg"
                        alt="Company logo"
                        className="hidden cursor-pointer group-hover:block"
                      />
                      <span className="text-sm font-normal text-black group-hover:text-purple-400">
                        Change Password
                      </span>
                    </div>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="outline-none">
                    <div className="group flex cursor-pointer items-center gap-[10px] py-[10px] px-[15px] hover:bg-orange-400">
                      <img
                        src="/static/logout-org.svg"
                        alt="Company logo"
                        className="cursor-pointer group-hover:hidden"
                      />
                      <img
                        src="/static/logout-white.svg"
                        alt="Company logo"
                        className="hidden cursor-pointer group-hover:block"
                      />
                      <span className="text-sm font-normal text-orange-400 group-hover:text-white">
                        Logout
                      </span>
                    </div>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
        </div>
        <div
          id="findPerfect-agents"
          className="grid items-center justify-items-center px-[84px] pb-[155px] sm:pb-[60px] lg:px-0"
        >
          <div className=" pb-[35px]">
            <h2 className="pb-[15px] text-center text-6xl font-extrabold text-white sm:text-xl1 lg:text-start">
              Find The Perfect Real Estate Agent
            </h2>
            <p className="text-center text-xl font-normal text-white sm:text-sm lg:text-start">
              Make your search and sale easier and faster by connecting with one
              of our
              <br /> expert local agent in your neighborhood
            </p>
          </div>

          <label
            htmlFor="search-btn"
            className="flex w-full cursor-text items-center justify-between gap-[10px] rounded-[5px] bg-white p-[13px]"
          >
            <img
              src="/static/search.svg"
              alt="Company logo"
              className="mr-[-10px] cursor-pointer"
            />
            <input
              id="search-btn"
              className="hidden h-[61px] w-full text-lg text-gray-400 outline-none sm:h-auto lg:block"
              type="text"
              name="search-input"
            />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="w-full outline-none lg:hidden">
                <input
                  id="search-btn"
                  className="h-[61px] w-full text-lg text-gray-400 outline-none"
                  type="text"
                  name="search-input"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="mt-[17px] ml-[3px] w-[795px] overflow-hidden rounded-[5px] bg-white">
                <DropdownMenu.Item className="flex cursor-pointer items-center gap-[8px] border-b border-gray-900 px-[56px] py-[15px] outline-none">
                  <img src="/static/pin-blue.svg" alt="Company logo" />
                  <p className="lang-poppins text-base font-medium text-gray-400">
                    Use my current location
                  </p>
                </DropdownMenu.Item>

                <div className="grid px-[56px] pt-[25px] pb-[10px]">
                  <p className="lang-poppins mb-[24px] text-base font-semibold text-gray-300">
                    BY NAME
                  </p>
                  <div className="mb-[37px]">
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/short-user1.svg" alt="Company logo" />
                        <span>Tim Hortons</span>
                      </div>
                      <div className="flex items-center gap-[5.61px]">
                        <img src="/static/5-stars.svg" alt="Company logo" />
                        <span className="font-sans text-sm font-semibold text-gray-300">
                          5.0
                        </span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/short-user2.svg" alt="Company logo" />
                        <span>Lydia Hollie</span>
                      </div>
                      <div className="flex items-center gap-[5.61px]">
                        <img src="/static/5-stars.svg" alt="Company logo" />
                        <span className="font-sans text-sm font-semibold text-gray-300">
                          5.0
                        </span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/short-user3.svg" alt="Company logo" />
                        <span>Dave Lorsdky</span>
                      </div>
                      <div className="flex items-center gap-[5.61px]">
                        <img src="/static/5-stars.svg" alt="Company logo" />
                        <span className="font-sans text-sm font-semibold text-gray-300">
                          5.0
                        </span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/short-user4.svg" alt="Company logo" />
                        <span>Joan Wrigley</span>
                      </div>
                      <div className="flex items-center gap-[5.61px]">
                        <img src="/static/5-stars.svg" alt="Company logo" />
                        <span className="font-sans text-sm font-semibold text-gray-300">
                          5.0
                        </span>
                      </div>
                    </DropdownMenu.Item>
                  </div>

                  <p className="lang-poppins mb-[24px] text-base font-semibold text-gray-300">
                    BY LOCATION
                  </p>
                  <div>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/pin-gray.svg" alt="Company logo" />
                        <span>Los Angles, California</span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/pin-gray.svg" alt="Company logo" />
                        <span>Jersey City, New Jersey</span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/pin-gray.svg" alt="Company logo" />
                        <span>Toronto, Ontario</span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/pin-gray.svg" alt="Company logo" />
                        <span>Thompson, Manitoba</span>
                      </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex cursor-pointer items-center justify-between border-b border-gray-900 py-[10px] outline-none">
                      <div className="flex items-center gap-[25px]">
                        <img src="/static/pin-gray.svg" alt="Company logo" />
                        <span>Syndney, Nova Scotia</span>
                      </div>
                    </DropdownMenu.Item>
                  </div>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Root>

            <button className="min-w-[203px] rounded-[5px] bg-purple-400 py-[17px] px-[22px] text-lg font-semibold text-white sm:hidden">
              Search Agents
            </button>
          </label>
          <button className="mt-[15px] hidden w-full rounded-[5px] bg-purple-400 py-[12px] px-[22px] text-lg font-semibold text-white sm:block">
            Search Agents
          </button>
        </div>
      </div>
    </div>
    <div id="sec-2">
      <div
        id="topRated-agents"
        className="container mt-[50px] mb-[85px] xl:px-[20px]"
      >
        <h2 className="pb-[13px] text-4xl font-extrabold text-gray-400 sm:text-xl1">
          Toronto’s Top Rated Agents
        </h2>
        <p className="lang-poppins pb-[50px] text-lg font-normal text-gray-500 sm:pb-[10px] sm:text-sm">
          Clients loved working with these agents
        </p>
        <div className="mb-[80px] grid grid-cols-2 justify-between gap-[33px] gap-y-[60px] sm:mb-[40px] sm:gap-y-[30px] lg:grid-cols-none">
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent1.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Tim Hortons
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent2.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Joan Wrigley
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent3.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Lydia Hollie
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent4.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Dave Lordsky
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[20px]">
          <img
            src="/static/Left.svg"
            alt="Company logo"
            className="cursor-pointer"
          />

          <div className="flex gap-[10px]">
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] bg-purple-300 text-sm font-extrabold text-purple-400">
              1
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              2
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200 sm:hidden">
              3
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center  pl-[9px] text-base font-semibold text-gray-300">
              .....
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              6
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              7
            </span>
          </div>

          <img
            src="/static/Right.svg"
            alt="Company logo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div id="sec-3" className="bg-purple-200">
      <div
        id="howToChoose-agents"
        className="container grid grid-cols-[max-content_1fr] items-center justify-between gap-[31px] lg:grid-cols-none xl:px-[20px]"
      >
        <figure className="mb-auto overflow-hidden lg:mx-auto">
          <img
            src="/static/sec3-side-pic.svg"
            className="mt-[-20px]"
            alt="Company logo"
          />
        </figure>
        <div className="pt-[47px] pb-[73px] sm:p-0">
          <p className="lang-poppins text-sm font-semibold text-purple-400">
            CHOOSING YOUR AGENT
          </p>
          <h3 className="pb-[19px] text-4xl font-extrabold text-gray-400 sm:text-xl1">
            How to choose your agent
          </h3>
          <p className="pb-[24px] text-lg font-normal text-gray-400 sm:text-base">
            You should choose an agent you are comfortable working with and who
            you feel has your best interests at heart. In order to make a
            decision, try asking prospective agents the following:
          </p>
          <div className="flex gap-[16px] pb-[16px]">
            <img src="/static/dark-gray-point.svg" alt="Company logo" />
            <p className="lang-poppins  text-lg font-medium text-gray-400 sm:text-sm">
              How and where your property will be advertised
            </p>
          </div>
          <div className="flex gap-[16px] pb-[16px]">
            <img src="/static/dark-gray-point.svg" alt="Company logo" />
            <p className="lang-poppins  text-lg font-medium text-gray-400 sm:text-sm">
              Ask to see examples of their success in selling properties like
              yours
            </p>
          </div>
          <div className="flex items-start gap-[16px] pb-[43px]">
            <img
              src="/static/dark-gray-point.svg"
              alt="Company logo"
              className="pt-[6px]"
            />
            <p className="lang-poppins text-lg font-medium text-gray-400 sm:text-sm">
              How often you can expect feedback from the agent while your
              property is on the marke
            </p>
          </div>

          <button className="flex items-center gap-[10px] rounded-[5px] bg-purple-400 p-[12px] text-white">
            <img src="/static/search-white.svg" alt="Company logo" />
            <span className="text-lg font-normal text-white sm:text-sm">
              Find an agent
            </span>
          </button>
        </div>
      </div>
    </div>
    <div id="sec-4">
      <div
        id="mostActive-agents"
        className="container mt-[65px] mb-[70px] xl:px-[20px]"
      >
        <h2 className="pb-[50px] text-4xl font-extrabold text-gray-400 sm:pb-0 sm:text-xl1">
          Toronto’s Most Active Agents
        </h2>
        <div className="mb-[80px] grid grid-cols-2 justify-between gap-[33px] gap-y-[60px] sm:mb-[40px] sm:gap-y-[30px] lg:grid-cols-none">
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent1.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Tim Hortons
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent2.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Joan Wrigley
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent3.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Lydia Hollie
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex items-start justify-center pt-[20px] sm:pb-0">
              <img
                src="/static/agent4.svg"
                alt="Company logo"
                className="sm:min-h-auto min-h-[112px] min-w-[112px] sm:min-w-[70px]"
              />
            </div>
            <div className="grid gap-[28px]">
              <div>
                <div className="mb-[8px] flex items-center justify-between sm:mb-[15px] sm:flex-col sm:items-start sm:pt-[22px]">
                  <h3 className="lang-poppins text-2xl font-semibold text-gray-400 sm:text-xl1">
                    Dave Lordsky
                  </h3>
                  <div className="flex items-center gap-[5.61px]">
                    <img src="/static/5-stars.svg" alt="Company logo" />
                    <span className="font-sans text-sm font-semibold text-gray-300">
                      5.0
                    </span>
                  </div>
                </div>
                <p className="lang-poppins text-base font-normal text-gray-400 sm:text-sm">
                  Tim is a real estate agent at Kaleidico Realty, with over 8
                  years of experience. Lynn prides himself in satisfying his
                  clients with the ...
                  <span className="lang-poppins cursor-pointer font-semibold text-gray-400 underline">
                    More
                  </span>
                </p>
              </div>
              <div className="ml-auto sm:ml-0">
                <button className="lang-poppins ml-auto rounded-[5px] bg-purple-400 p-[8px] text-base font-medium text-white sm:text-sm">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[20px]">
          <img
            src="/static/Left.svg"
            alt="Company logo"
            className="cursor-pointer"
          />

          <div className="flex gap-[10px]">
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] bg-purple-300 text-sm font-extrabold text-purple-400">
              1
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              2
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200 sm:hidden">
              3
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center  pl-[9px] text-base font-semibold text-gray-300">
              .....
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              6
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              7
            </span>
          </div>

          <img
            src="/static/Right.svg"
            alt="Company logo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div id="sec-5" className="bg-blue-400">
      <div
        id="ConnectWith-agents"
        className="container grid grid-cols-[max-content_1fr] items-center justify-between gap-[155px] pt-[35px] pb-[37px] lg:grid-cols-1 lg:gap-[30px] xl:px-[20px]"
      >
        <div>
          <h3 className="pb-[9px] text-4xl font-bold text-white sm:text-xl1">
            Connect with an expert local agent{' '}
          </h3>
          <p className="lang-poppins text-base font-normal text-white sm:text-sm">
            Our agents are here to help you. Let’s make your home
            <br /> search or sale easier.
          </p>
        </div>
        <div>
          <label
            htmlFor="search-by-no"
            className="flex cursor-text items-center gap-[24px] overflow-hidden rounded-[5px] bg-white"
          >
            <input
              id="search-by-no"
              className="w-full pl-[24px] font-sans text-base font-light outline-none placeholder:text-gray-300 sm:text-xs"
              type="text"
              name="search-by-name"
              placeholder="Search by name or location"
            />
            <button className="flex items-center justify-center bg-purple-400 py-[16px] px-[28px]">
              <img src="/static/search-white-new.svg" alt="Company logo" />
            </button>
          </label>
        </div>
      </div>
    </div>
    <div id="sec-6">
      <div
        id="ConversationWith-agents"
        className="container grid grid-cols-[1fr_max-content] items-center gap-[75.93px] pt-[100px] pb-[145px] sm:gap-[25px] sm:pt-[50px] lg:grid-cols-none lg:pb-[50px] xl:px-[20px]"
      >
        <div>
          <p className="lang-poppins pb-[6px] text-base font-medium text-purple-400 sm:text-sm">
            CHAT WITH AN AGENT
          </p>
          <h3 className="pb-[13px] text-4xl font-extrabold text-gray-400 sm:text-xl1">
            Real Time Conversation
          </h3>
          <p className="lang-poppins pb-[47px] text-lg font-normal text-gray-500 sm:pb-[25px] sm:text-base">
            You should choose an agent you are comfortable working with and who
            you feel has your best interests at heart. you should be able to get
            your best agent by considering the following simple steps:
          </p>
          <div className="flex gap-[16px] pb-[15px]">
            <img src="/static/dark-gray-point.svg" alt="Company logo" />
            <p className="lang-poppins  text-lg font-medium text-gray-400 sm:text-sm">
              Search for an agent by name or location
            </p>
          </div>
          <div className="flex gap-[16px] pb-[15px]">
            <img src="/static/dark-gray-point.svg" alt="Company logo" />
            <p className="lang-poppins  text-lg font-medium text-gray-400 sm:text-sm">
              Filter the results base on your interests
            </p>
          </div>
          <div className="flex items-start gap-[16px] pb-[30px]">
            <img src="/static/dark-gray-point.svg" alt="Company logo" />
            <p className="lang-poppins text-lg font-medium text-gray-400 sm:text-sm">
              Select and contact your best match agent
            </p>
          </div>
          <button className="flex items-center gap-[10px] rounded-[5px] bg-purple-400 p-[12px] text-white">
            <img src="/static/search-white.svg" alt="Company logo" />
            <span className="text-lg font-normal text-white sm:text-sm">
              Find an agent
            </span>
          </button>
        </div>
        <figure className="lg:mx-auto">
          <img src="/static/sec6-right-bg.svg" alt="Company logo" />
        </figure>
      </div>
    </div>
    <div id="sec-7">
      <div
        id="ArticlesBy-agents"
        className="container mb-[86.5px] xl:px-[20px]"
      >
        <h2 className="pb-[56px] text-4xl font-extrabold text-gray-400 sm:pb-[30px] sm:text-xl1">
          Latest Articles by Agents
        </h2>

        <div className="grid grid-cols-3 gap-[42.21px] pb-[74px] md:flex md:flex-col lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between pb-[12.61px] sm:pb-[8px]">
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/calender.svg" alt="Company logo" />
                <span className="lang-poppins text-base font-normal text-gray-901 sm:text-sm">
                  MARCH 21, 2022
                </span>
              </div>
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/read.svg" alt="Company logo" />
                <span className="lang-poppins text-base font-normal text-gray-901 sm:text-sm">
                  5 MIN READ
                </span>
              </div>
            </div>
            <figure className="mb-[16.81px] sm:mb-[8px]">
              <img
                src="/static/house1.svg"
                className="cursor-pointer lg:w-full"
                alt="Company logo"
              />
            </figure>
            <h3 className="pb-[15.76px] text-xl1 font-bold text-gray-400 sm:text-base">
              How to get multiple offers on your home
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/short-user1.svg" alt="Company logo" />
                <span className="sm:text-sm">Joan Hollie</span>
              </div>
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/sell.svg" alt="Company logo" />
                <span className="sm:text-sm">SELLING</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between pb-[12.61px] sm:pb-[8px]">
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/calender.svg" alt="Company logo" />
                <span className="lang-poppins text-base font-normal text-gray-901 sm:text-sm">
                  MARCH 21, 2022
                </span>
              </div>
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/read.svg" alt="Company logo" />
                <span className="lang-poppins text-base font-normal text-gray-901 sm:text-sm">
                  5 MIN READ
                </span>
              </div>
            </div>
            <figure className="mb-[16.81px] sm:mb-[8px]">
              <img
                src="/static/house2.svg"
                className="cursor-pointer lg:w-full"
                alt="Company logo"
              />
            </figure>
            <h3 className="pb-[15.76px] text-xl1 font-bold text-gray-400 sm:text-base">
              How to get multiple offers on your home
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/short-user1.svg" alt="Company logo" />
                <span className="sm:text-sm">Joan Hollie</span>
              </div>
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/sell.svg" alt="Company logo" />
                <span className="sm:text-sm">SELLING</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between pb-[12.61px] sm:pb-[8px]">
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/calender.svg" alt="Company logo" />
                <span className="lang-poppins text-base font-normal text-gray-901 sm:text-sm">
                  MARCH 21, 2022
                </span>
              </div>
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/read.svg" alt="Company logo" />
                <span className="lang-poppins text-base font-normal text-gray-901 sm:text-sm">
                  5 MIN READ
                </span>
              </div>
            </div>
            <figure className="mb-[16.81px] sm:mb-[8px]">
              <img
                src="/static/house3.svg"
                className="cursor-pointer lg:w-full"
                alt="Company logo"
              />
            </figure>
            <h3 className="pb-[15.76px] text-xl1 font-bold text-gray-400 sm:text-base">
              How to get multiple offers on your home
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/short-user1.svg" alt="Company logo" />
                <span className="sm:text-sm">Joan Hollie</span>
              </div>
              <div className="flex items-center gap-[10.55px]">
                <img src="/static/sell.svg" alt="Company logo" />
                <span className="sm:text-sm">SELLING</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-[20px]">
          <img
            src="/static/Left.svg"
            alt="Company logo"
            className="cursor-pointer"
          />

          <div className="flex gap-[10px]">
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] bg-purple-300 text-sm font-extrabold text-purple-400">
              1
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              2
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200 sm:hidden">
              3
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center  pl-[9px] text-base font-semibold text-gray-300">
              .....
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              6
            </span>
            <span className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border border-gray-100 text-sm font-semibold text-gray-200">
              7
            </span>
          </div>

          <img
            src="/static/Right.svg"
            alt="Company logo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div
      id="sec-8"
      className="bg-blue-500"
      style={{
        backgroundImage: 'url("/static/footer-bg.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPositionX: 'right',
      }}
    >
      <div className="container pt-[40px] pb-[47px] xl:px-[20px]">
        <div
          id="company-agentBook-resources"
          className="mb-[40px] grid grid-cols-4 gap-[150px] border-b border-gray-902 pb-[40px] sm:flex sm:flex-col md:grid-cols-2 lg:gap-[30px]"
        >
          <div>
            <img
              src="/static/brand-logo-footer.svg"
              alt="Company logo"
              className="pb-[20px]"
            />
            <p className="lang-poppins pb-[24px] text-sm font-normal text-gray-201">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>
            <div className="flex gap-[16px]">
              <a
                href="#"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-202"
              >
                <img src="/static/insta.svg" alt="Company logo" />
              </a>
              <a
                href="#"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-202"
              >
                <img src="/static/dribble.svg" alt="Company logo" />
              </a>
              <a
                href="#"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-202"
              >
                <img src="/static/twitter.svg" alt="Company logo" />
              </a>
              <a
                href="#"
                className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-gray-202"
              >
                <img src="/static/youtube.svg" alt="Company logo" />
              </a>
            </div>
          </div>
          <div className="grid">
            <h3 className="pb-[24px] text-xl font-semibold text-white">
              Company
            </h3>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              About
            </a>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Blog
            </a>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Contact
            </a>
            <a href="#" className="flex items-center gap-[8px]">
              <span className="lang-poppins mb-[12px] text-sm font-normal text-gray-201">
                Careers
              </span>
              <img
                src="/static/hiring.svg"
                alt="Company logo"
                className="mb-[11px]"
              />
            </a>
          </div>
          <div className="grid">
            <h3 className="pb-[24px] text-xl font-semibold text-white">
              Agentbook
            </h3>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Search for agent
            </a>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Search for sale
            </a>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              FAQ
            </a>
          </div>
          <div className="grid">
            <h3 className="pb-[24px] text-xl font-semibold text-white">
              Resources
            </h3>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Articles
            </a>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Guides
            </a>
            <a
              href="#"
              className="lang-poppins mb-[12px] text-sm font-normal text-gray-201"
            >
              Real Estate News
            </a>
          </div>
        </div>
        <div
          id="footer"
          className="flex items-center justify-between md:flex-col md:items-start md:gap-[30px]"
        >
          <p className="lang-poppins text-sm font-normal text-gray-203">
            2022 Agentbook All Rights Reserved
          </p>
          <div className="flex items-center gap-[41px] md:flex-col md:items-start md:gap-[30px]">
            <a
              href="#"
              className="lang-poppins text-sm font-normal text-gray-203 hover:underline"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="lang-poppins text-sm font-normal text-gray-203 hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="lang-poppins text-sm font-normal text-gray-203 hover:underline"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { Main };
