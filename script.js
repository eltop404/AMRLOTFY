document.addEventListener('DOMContentLoaded', () => {
    // Initial static data (will be moved to localStorage if not present)
    const initialCoursesData = { 
        '1': { 
            'أعمال دولية': { 
                '1': ['مبادئ المحاسبة المالية', 'مبادئ الاقتصاد', 'مبادئ القانون', 'لغة أجنبية (1)', 'مبادئ إدارة الأعمال', 'أساسيات الحاسب'], 
                '2': ['محاسبة شركات', 'اقتصاديات التجارة الدولية', 'قانون دولي', 'لغة أجنبية (2)', 'إدارة الموارد البشرية', 'مبادئ التسويق'] 
            }, 
            'نظم معلومات': { 
                '1': ['طرق ومهارات الاتصال', 'رياضيات الأعمال', 'حقوق الإنسان', 'التفكير الابتكاري', 'السلوك التنظيمي', 'أساسيات الحاسب'], 
                '2': ['مقدمة في نظم المعلومات', 'أساسيات البرمجة', 'رياضيات متقدمة', 'إدارة قواعد البيانات', 'مبادئ الإحصاء', 'لغة إنجليزية فنية'] 
            } 
        }, 
        '2': { 
            'أعمال دولية': { 
                '1': ['إدارة اللوجستيات وسلاسل الإمداد', 'مبادئ التسويق', 'اقتصاد جزئي', 'محاسبة التكاليف', 'قانون الأعمال'], 
                '2': ['إدارة مالية', 'التسويق الدولي', 'اقتصاد كلي', 'محاسبة إدارية', 'نظم معلومات إدارية'] 
            }, 
            'نظم معلومات': { 
                '1': ['قانون الأعمال', 'قواعد البيانات (1)', 'إدارة الإنتاج', 'محاسبة شركات', 'تصميم برامج الحاسب'], 
                '2': ['شبكات الحاسب (1)', 'تحليل وتصميم النظم', 'هياكل البيانات', 'بحوث العمليات', 'تطبيقات الإنترنت'] 
            } 
        }
    };
    
    const videoCoursesData = { 
        'ecommerce': { 
            title_ar: 'كورسات التجارة الإلكترونية', 
            title_en: 'E-commerce Courses', 
            icon: 'fas fa-cash-register', 
            videos: [ 
                { title: 'كورس التجارة الالكترونية الكامل', embed_url: 'https://www.youtube.com/embed/h0unhODkj40' }, 
                { title: 'دليلك الشامل لتبدأ في التجارة الالكترونية', embed_url: 'https://www.youtube.com/embed/ICFXS5WIS3Y' }, 
                { title: 'أسرار التجارة الإلكترونية', embed_url: 'https://www.youtube.com/embed/q2f_BVSVeHQ' }, 
                { title: 'كورس شامل للتجارة الإلكترونية', embed_url: 'https://www.youtube.com/embed/v46BIS_ICiA' } 
            ] 
        }, 
        'graphic-design': { 
            title_ar: 'كورسات الجرافيك ديزاين', 
            title_en: 'Graphic Design Courses', 
            icon: 'fas fa-palette', 
            videos: [ 
                { title: 'كورس جرافيك ديزاين كامل', embed_url: 'https://www.youtube.com/embed/va-MZOPrJ0s' }, 
                { title: 'تعلم الفوتوشوب في فيديو واحد', embed_url: 'https://www.youtube.com/embed/4IJPI0d7STI' }, 
                { title: 'تعلم اليستريتور في فيديو واحد', embed_url: 'https://www.youtube.com/embed/WlTsKiVwZAM' } 
            ] 
        }, 
        'video-editing': { 
            title_ar: 'كورسات المونتاج', 
            title_en: 'Video Editing Courses', 
            icon: 'fas fa-film', 
            videos: [ 
                { title: 'كورس مونتاج كامل ببرنامج واحد', embed_url: 'https://www.youtube.com/embed/qKtUjfolUOM' }, 
                { title: 'تعلم المونتاج باستخدام أدوبي بريمير', embed_url: 'https://www.youtube.com/embed/8iGvUZKeLeU' } 
            ] 
        }, 
        'data-analysis': { 
            title_ar: 'كورسات تحليل البيانات', 
            title_en: 'Data Analysis Courses', 
            icon: 'fas fa-chart-pie', 
            videos: [ 
                { title: 'كورس تحليل البيانات الكامل', embed_url: 'https://www.youtube.com/embed/nXdkuxAj7tg' }, 
                { title: 'تحليل البيانات باستخدام اكسل', embed_url: 'https://www.youtube.com/embed/z7nN0hZ_PtQ' } 
            ] 
        }, 
        'ai': { 
            title_ar: 'كورسات الذكاء الاصطناعي', 
            title_en: 'Artificial Intelligence Courses', 
            icon: 'fas fa-brain', 
            videos: [ 
                { title: 'كورس الذكاء الاصطناعي', embed_url: 'https://www.youtube.com/embed/oDmyhjwAYXk' }, 
                { title: 'تعلم الذكاء الاصطناعي في 6 ساعات', embed_url: 'https://www.youtube.com/embed/Rp5VnXnWMLk' } 
            ] 
        } 
    };
    
    const initialAiTools = [ 
        {id: 1, name: "ChatGPT", url: "https://chatgpt.com/"}, 
        {id: 2, name: "Gemini", url: "https://gemini.google.com/"}, 
        {id: 3, name: "Perplexity (بحث)", url: "https://www.perplexity.ai/"}, 
        {id: 4, name: "Claude", url: "https://claude.ai/"}, 
        {id: 5, name: "Grammarly (كتابة)", url: "https://www.grammarly.com/"}, 
        {id: 6, name: "QuillBot (إعادة صياغة)", url: "https://quillbot.com/"}, 
        {id: 7, name: "WolframAlpha (حسابات)", url: "https://www.wolframalpha.com/"}, 
        {id: 8, name: "ChatPDF", url: "https://www.chatpdf.com/"}, 
        {id: 9, name: "Socratic (حلول)", url: "https://socratic.org/"}, 
        {id: 10, name: "Consensus (أبحاث)", url: "https://consensus.app/"}, 
        {id: 11, name: "Elicit (أبحاث)", url: "https://elicit.org/"}, 
        {id: 12, name: "TutorAI (مُعلم ذكي)", url: "https://www.tutorai.me/"}, 
        {id: 13, name: "MyBib (توثيق)", url: "https://www.mybib.com/"}, 
        {id: 14, name: "Notion AI (تنظيم)", url: "https://www.notion.so/product/ai"}, 
        {id: 15, name: "Meta AI", url: "https://www.meta.ai/"}, 
        {id: 16, name: "SciSpace (أوراق علمية)", url: "https://typeset.io/"} 
    ];
    const translations = { 
        ar: { 
            login_choice_btn: "تسجيل الدخول", 
            create_account_btn: "إنشاء حساب", 
            create_account_title: "إنشاء حساب جديد", 
            register_btn: "سجل الآن", 
            login_title_main: "تسجيل الدخول", 
            login_btn_main: "دخول", 
            name_placeholder: "الاسم", 
            password_label: "كلمة السر", 
            password_format_hint: "يجب أن لا تقل عن 8 حروف وتحتوي على أحرف وأرقام.", 
            password_forgot_hint: "يجب عليك عدم نسيان كلمه السر", 
            year_placeholder: "الفرقة", 
            year_1: "الأولى", 
            year_2: "الثانية", 
            major_placeholder: "اختر الفرقة أولاً...", 
            major_label: "الشعبة", 
            major_option_1: "أعمال دولية", 
            major_option_2: "نظم معلومات", 
            semester_label: "الفصل الدراسي", 
            semester_1: "الفصل الدراسي الأول", 
            semester_2: "الفصل الدراسي الثاني", 
            semester_warning_text: "سيتم فتح هذا الفصل في الميعاد المحدد له", 
            welcome_back: "مرحباً يـ ", 
            nav_pdf: "كتب", 
            nav_sections: "السكاشن", 
            nav_ai: "AI", 
            nav_platform: "المنصة", 
            nav_settings: "الإعدادات", 
            nav_about: "عنا", 
            nav_courses: "كورسات", 
            nav_meetings: "ميتنج", 
            meetings_locked_main: "قسم الميتنج مغلق حالياً من قبل الإدارة.", 
            meetings_locked_sub: "سيتم تفعيله عند وجود جلسات مباشرة.", 
            close_btn: "إغلاق", 
            settings_title: "الإعدادات", 
            settings_lang: "اللغة", 
            settings_theme: "الثيم اللوني", 
            settings_mode: "الوضع", 
            mode_dark: "داكن", 
            mode_light: "فاتح", 
            mode_oled: "ليلي", 
            mode_gold_black: "ذهبي", 
            about_title: "Mora for Studying", 
            about_desc: "خاص بالمعهد العالي للحاسبات والمعلومات بطنطا", 
            app_version: "الاصدار 11.0", 
            about_dev: "تم التطوير بواسطه Amr lotfy.", 
            sponsors_title: "تحت رعاية", 
            ai_title: "اختر مساعدك الذكي", 
            platform_title: "روابط المنصة التعليمية", 
            redirect_dev: "تطوير: Amr Lotfy", 
            redirect_msg: "...جاري تحويلك الآن", 
            fill_all_fields: "الرجاء ملء جميع الحقول", 
            password_error_length: "كلمة السر يجب أن تكون 8 أحرف على الأقل", 
            password_error_format: "كلمة السر يجب أن تحتوي على أحرف وأرقام", 
            lecture: "المحاضرة", 
            section: "سيكشن", 
            pdf: "ملف", 
            privacy_policy_btn: "سياسة الخصوصية", 
            privacy_title: "سياسة الخصوصية", 
            privacy_content: "نحن في Mora for Studying نأخذ خصوصيتك على محمل الجد. البيانات التي يتم جمعها عند التسجيل (مثل الاسم، الفرقة، الشعبة) تُستخدم فقط لتخصيص تجربتك التعليمية وعرض المواد الدراسية المناسبة لك. نحن لا نشارك هذه المعلومات مع أي طرف ثالث. يتم تخزين جميع بيانات حسابك بشكل آمن على جهازك المحلي.", 
            loading_text: "متنساش تصلي علي النبي", 
            rate_website_btn: "قيم الموقع", 
            rating_title: "قيم تجربتك", 
            rating_thanks: "شكراً لتقييمك!", 
            blog_btn: "مدونتي", 
            blog_title: "مدونتي الشخصية", 
            blog_save_btn: "حفظ", 
            blog_saved_success: "تم الحفظ!", 
            timer_btn: "تايمر", 
            timer_title_pomodoro: "تايمر التركيز", 
            timer_start_btn: "بدء", 
            timer_pause_btn: "إيقاف مؤقت", 
            timer_reset_btn: "إعادة ضبط", 
            courses_title: "كورسات مقترحة", 
            courses_locked_msg: "هذا القسم يتطلب <span class='highlight'>__UNLOCK__</span> نقطة للفتح. استمر في حضور المحاضرات لجمع النقاط!", 
            dev_credit_text: "تطوير: Amr Lotfy", 
            logout_btn: "تسجيل الخروج", 
            logout_msg: "جاري تسجيل خروجك...", 
            locked_lectures_msg: "لم يقم الأدمن بإضافة محتوى لهذه المحاضرة بعد.", 
            locked_pdfs_msg: "لم يقم الأدمن بإضافة هذا الكتاب بعد.", 
            locked_sections_msg: "لم يقم الأدمن بإضافة محتوى لهذا السكشن بعد.", 
            auth_error_no_account: "لا يوجد حسابات مسجلة. يرجى إنشاء حساب أولاً.", 
            auth_error_user_exists: "هذا الاسم مستخدم بالفعل", 
            auth_error_wrong_pass: "كلمة المرور غير صحيحة", 
            auth_error_banned: "تم حظر هذا الحساب.", 
            captcha_enter_code: "أدخل الرمز", 
            captcha_error: "الرمز غير صحيح، حاول مرة أخرى.", 
            clear_data_btn: "محو البيانات", 
            clear_data_confirm: "هل أنت متأكد من رغبتك في محو جميع البيانات؟ لا يمكن التراجع عن هذا الإجراء.", 
            pomodoro_mode_work: "جلسة تركيز", 
            pomodoro_mode_break: "وقت الاستراحة", 
            pomodoro_cycles: "الجولة:", 
            pomodoro_desc: "استخدم تقنية بومودورو لتنظيم وقتك وزيادة تركيزك، عبر جلسات عمل واستراحة متناوبة.", 
            pomodoro_work_done: "أحسنت صنعًا! انتهت جلسة التركيز. شكرًا لالتزامك.", 
            pomodoro_break_done: "انتهت استراحتك. لنعد إلى التركيز!", 
            points_info_main: "لكل محاضرة تدخلها مكافأة <span class='highlight'>__POINTS__</span> نقطة، اجمع <span class='highlight'>__UNLOCK__</span> نقطة لفتح قسم الكورسات.", 
            points_info_dev_credit: "تطوير: Amr Lotfy", 
            timer_live_text: "جارٍ الآن", 
            nav_opinions: "آراء الطلاب", 
            opinions_title: "آراء الطلاب", 
            opinion_placeholder: "اكتب رأيك هنا...", 
            opinion_submit_btn: "نشر الرأي", 
            opinion_success: "تم نشر رأيك بنجاح!", 
            settings_saved: "تم حفظ الإعدادات بنجاح!", 
            announcement_sent: "تم إرسال الإعلان بنجاح!", 
            nav_announcements: "الإعلانات", 
            nav_site_settings: "إعدادات الموقع", 
            "nav_text_editor": "إدارة نصوص الموقع", 
            nav_ratings_admin: "تقييمات الموقع", 
            nav_ai_tools_admin: "إدارة أدوات AI" 
        }, 
        en: { 
            login_choice_btn: "Log In", 
            create_account_btn: "Create Account", 
            create_account_title: "Create New Account", 
            register_btn: "Register Now", 
            login_title_main: "Log In", 
            login_btn_main: "Enter", 
            name_placeholder: "Name", 
            password_label: "Password", 
            password_format_hint: "Must be 8+ characters and contain letters/numbers.", 
            password_forgot_hint: "You must not forget your password", 
            year_placeholder: "Year", 
            year_1: "First", 
            year_2: "Second", 
            major_placeholder: "Select year first...", 
            major_label: "Division", 
            major_option_1: "International Business", 
            major_option_2: "Information Systems", 
            semester_label: "Semester", 
            semester_1: "First Semester", 
            semester_2: "Second Semester", 
            semester_warning_text: "This semester will be opened at its scheduled time", 
            welcome_back: "Welcome, ", 
            nav_pdf: "Books", 
            nav_sections: "Sections", 
            nav_ai: "AI", 
            nav_platform: "Platform", 
            nav_settings: "Settings", 
            nav_about: "About", 
            nav_courses: "Courses", 
            nav_meetings: "Meetings", 
            meetings_locked_main: "Meetings section is currently disabled by the admin.", 
            meetings_locked_sub: "It will be activated when live sessions are available.", 
            close_btn: "Close", 
            settings_title: "Settings", 
            settings_lang: "Language", 
            settings_theme: "Color Theme", 
            settings_mode: "Mode", 
            mode_dark: "Dark", 
            mode_light: "Light", 
            mode_oled: "OLED", 
            mode_gold_black: "Gold", 
            about_title: "Mora for Studying", 
            about_desc: "Exclusive for the Higher Institute for Computers and Information in Tanta", 
            app_version: "Version 11.0", 
            about_dev: "Developed by Amr lotfy.", 
            sponsors_title: "Under the sponsorship of", 
            ai_title: "Choose your AI assistant", 
            platform_title: "Educational Platform Links", 
            redirect_dev: "Developed by: Amr Lotfy", 
            redirect_msg: "Redirecting you now...", 
            fill_all_fields: "Please fill all fields", 
            password_error_length: "Password must be at least 8 characters long", 
            password_error_format: "Password must contain letters and numbers", 
            lecture: "Lecture", 
            section: "Section", 
            pdf: "PDF", 
            privacy_policy_btn: "Privacy Policy", 
            privacy_title: "Privacy Policy", 
            privacy_content: "At Mora for Studying, we take your privacy seriously. The data collected upon registration (such as name, year, and division) is used solely to personalize your educational experience and display the appropriate course materials. We do not share this information with any third parties. All your account data is stored securely on your local device.", 
            loading_text: "Remember to send blessings upon the Prophet", 
            rate_website_btn: "Rate Website", 
            rating_title: "Rate Your Experience", 
            rating_thanks: "Thanks for your feedback!", 
            blog_btn: "My Blog", 
            blog_title: "My Personal Blog", 
            blog_save_btn: "Save", 
            blog_saved_success: "Saved!", 
            timer_btn: "Timer", 
            timer_title_pomodoro: "Focus Timer", 
            timer_start_btn: "Start", 
            timer_pause_btn: "Pause", 
            timer_reset_btn: "Reset", 
            courses_title: "Suggested Courses", 
            courses_locked_msg: "This section requires <span class='highlight'>__UNLOCK__</span> points to unlock. Keep attending lectures to earn points!", 
            dev_credit_text: "Developed by: Amr Lotfy", 
            logout_btn: "Logout", 
            logout_msg: "Logging you out...", 
            locked_lectures_msg: "The admin has not added content for this lecture yet.", 
            locked_pdfs_msg: "The admin has not added this book yet.", 
            locked_sections_msg: "The admin has not added content for this section yet.", 
            auth_error_no_account: "No accounts registered. Please create an account first.", 
            auth_error_user_exists: "This username is already taken", 
            auth_error_wrong_pass: "Incorrect password", 
            auth_error_banned: "This account has been banned.", 
            captcha_enter_code: "Enter the code", 
            captcha_error: "Incorrect code, please try again.", 
            clear_data_btn: "Clear Data", 
            clear_data_confirm: "Are you sure you want to clear all data? This action cannot be undone.", 
            pomodoro_mode_work: "Focus Session", 
            pomodoro_mode_break: "Break Time", 
            pomodoro_cycles: "Round:", 
            pomodoro_desc: "Use the Pomodoro Technique to organize your time and increase focus through alternating work and break sessions.", 
            pomodoro_work_done: "Excellent work! Focus session complete. Thank you for your commitment.", 
            pomodoro_break_done: "Your break is over. Let's get back to it!", 
            points_info_main: "Earn <span class='highlight'>__POINTS__</span> points for every lecture you attend. Collect <span class='highlight'>__UNLOCK__</span> points to unlock the Courses section.", 
            points_info_dev_credit: "Developed by: Amr Lotfy", 
            timer_live_text: "Live", 
            nav_opinions: "Opinions", 
            opinions_title: "Student Opinions", 
            opinion_placeholder: "Write your opinion here...", 
            opinion_submit_btn: "Publish Opinion", 
            opinion_success: "Your opinion has been published!", 
            settings_saved: "Settings saved successfully!", 
            announcement_sent: "Announcement sent successfully!", 
            nav_announcements: "Announcements", 
            nav_site_settings: "Site Settings", 
            "nav_text_editor": "Manage Site Text", 
            nav_ratings_admin: "Website Ratings", 
            nav_ai_tools_admin: "Manage AI Tools" 
        } 
    };
    const themes = [ 
        { name: 'Forest', accent: '#00ff7f', glow: 'rgba(0,255,127,0.4)', hover: '#33ff99' }, 
        { name: 'Cosmic', accent: '#be5cff', glow: 'rgba(190,92,255,0.4)', hover: '#d89aff' }, 
        { name: 'Solar', accent: '#ff8c00', glow: 'rgba(255,140,0,0.4)', hover: '#ffa500' }, 
        { name: 'Ocean', accent: '#00bfff', glow: 'rgba(0,191,255,0.4)', hover: '#1e90ff' }, 
        { name: 'Crimson', accent: '#dc143c', glow: 'rgba(220,20,60,0.4)', hover: '#ff4500' }, 
        { name: 'Cyber', accent: '#00FFFF', glow: 'rgba(0,255,255,0.4)', hover: '#7DFDFE' }, 
        { name: 'Rose', accent: '#FF66CC', glow: 'rgba(255,102,204,0.4)', hover: '#FFB6C1' }, 
        { name: 'Gold', accent: '#FFD700', glow: 'rgba(255,215,0,0.4)', hover: '#F0E68C' }, 
        { name: 'Magenta', accent: '#ff00ff', glow: 'rgba(255,0,255,0.4)', hover: '#e600e6' },
        { name: 'Teal', accent: '#20c997', glow: 'rgba(32, 201, 151, 0.4)', hover: '#48d1b0' },
        { name: 'Indigo', accent: '#6610f2', glow: 'rgba(102, 16, 242, 0.4)', hover: '#8540f5' },
        { name: 'Orange', accent: '#fd7e14', glow: 'rgba(253, 126, 20, 0.4)', hover: '#fd9a4a' },
        { name: 'Sky', accent: '#3399ff', glow: 'rgba(51, 153, 255, 0.4)', hover: '#5ca9ff' },
        { name: 'Lime', accent: '#a7e369', glow: 'rgba(167, 227, 105, 0.4)', hover: '#b8e986' },
        { name: 'Electric Violet', accent: '#8f00ff', glow: 'rgba(143, 0, 255, 0.4)', hover: '#a333ff' },
        { name: 'Ruby', accent: '#e0115f', glow: 'rgba(224, 17, 95, 0.4)', hover: '#e64082' }
    ];
    
    const USERS_DB_KEY = 'moraUsersDB', CURRENT_USER_KEY = 'moraCurrentUser', LAST_USER_KEY = 'moraLastUser', OPINIONS_DB_KEY = 'moraStudentOpinions', COURSES_DB_KEY = 'moraCoursesDB', CONTENT_DB_KEY = 'moraContentDB', SITE_SETTINGS_KEY = 'moraSiteSettings', ANNOUNCEMENT_KEY = 'moraAnnouncement', TEXT_CONTENT_KEY = 'moraTextContentDB', RATINGS_DB_KEY = 'moraRatingsDB', AI_TOOLS_DB_KEY = 'moraAiToolsDB';
    const htmlEl = document.documentElement, body = document.body;
    const loadingPage = document.getElementById("loading-page"), loginPage = document.getElementById("login-page"), mainPage = document.getElementById("main-page"), adminPanel = document.getElementById("admin-panel");
    const authChoiceView = document.getElementById('auth-choice-view'), createAccountView = document.getElementById('create-account-view'), loginView = document.getElementById('login-view');
    const createAccountChoiceBtn = document.getElementById('create-account-choice-btn'), loginChoiceBtn = document.getElementById('login-choice-btn');
    const createAccountForm = document.getElementById('create-account-form'), loginForm = document.getElementById('login-form');
    const authMessage = document.getElementById('auth-message');
    const yearSelect = document.getElementById("year"), majorSelect = document.getElementById("major"), semesterSelect = document.getElementById("semester"), semesterWarning = document.getElementById("semester-warning");
    
    const captchaCanvas = document.getElementById('captcha-canvas');
    const captchaRefreshBtn = document.getElementById('captcha-refresh-btn');
    const captchaInput = document.getElementById('captcha-input');
    let captchaText = '';
    
    const welcomeMessageName = document.getElementById("welcome-message-name"), welcomeMessageDetails = document.getElementById("welcome-message-details");
    const coursesContainer = document.getElementById("courses-container");
    const detailsView = document.getElementById("details-view"), detailsViewTitle = document.getElementById("details-view-title"), detailsViewList = document.getElementById("details-view-list"), backToCoursesBtn = document.getElementById("back-to-courses-btn");
    
    // START: TIMER & NEW UI ELEMENTS
    const timerContainer = document.getElementById('timer-container');
    const timerDisplay = document.getElementById('timer-display');
    const startPauseTimerBtn = document.getElementById('start-pause-timer-btn');
    const resetTimerBtn = document.getElementById('reset-timer-btn');
    const pomodoroMode = document.getElementById('pomodoro-mode');
    const pomodoroCycles = document.getElementById('pomodoro-cycles');
    const timerLiveIndicator = document.getElementById('timer-live-indicator');
    const timerLiveText = document.getElementById('timer-live-text');
    const pointsCounter = document.getElementById('points-counter');
    const pointsInfoToast = document.getElementById('points-info-toast');
    const pointsInfoToastContent = document.getElementById('points-info-toast-content');
    const closeToastBtn = pointsInfoToast.querySelector('.close-toast-btn');
    const pointingArrow = document.getElementById('pointing-arrow');
    const opinionForm = document.getElementById('opinion-form');
    const opinionTextarea = document.getElementById('opinion-textarea');
    const opinionsList = document.getElementById('opinions-list');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');
    const studentCountEl = document.getElementById('student-count');
    const opinionsCountEl = document.getElementById('opinions-count');
    const subjectsCountEl = document.getElementById('subjects-count');
    const topStudentEl = document.getElementById('top-student');
    const adminStudentListContainer = document.getElementById('admin-student-list');
    const adminNavLinks = document.querySelectorAll('.admin-nav-link');
    const contentEditorModal = document.getElementById('content-editor-modal');
    const lectureContentModal = document.getElementById('lecture-content-modal');
    const announcementToast = document.getElementById('announcement-toast');
    const activeStudentsListEl = document.getElementById('active-students-list');
    let timerInterval;
    let isTimerRunning = false;
    let pomodoroState = 'work';
    let workDuration = 25 * 60;
    let breakDuration = 5 * 60;
    let timeRemaining = workDuration;
    let cycleCount = 1;
    let pointsToastTimeout;
    let activeUserInterval;
    // END: TIMER & NEW UI ELEMENTS
    
    const pointsDisplay = document.getElementById('points-display'), coursesBtn = document.getElementById('courses-btn'), coursesIcon = document.getElementById('courses-icon'), coursesLockedModal = document.getElementById('courses-locked-modal'), lockedMessageP = document.getElementById('courses-locked-message');
    const redirectModal = document.getElementById('redirect-modal'), timerElement = document.getElementById('redirect-timer');
    const pointsNotification = document.getElementById('points-notification');
    
    const meetingsBtn = document.getElementById('meetings-btn');
    const meetingsLockedModal = document.getElementById('meetings-locked-modal');
    let countdownInterval, currentView = 'subjects'; 
    // --- START: PROFESSIONAL LOGIN PAGE ANIMATION ---
    const loginAnimationCanvas = document.getElementById('login-animation-canvas');
    const loginAnimationCtx = loginAnimationCanvas.getContext('2d');
    let particlesArray;
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }
    function setupLoginAnimation() {
        loginAnimationCanvas.width = window.innerWidth;
        loginAnimationCanvas.height = window.innerHeight;
        particlesArray = [];
        const numberOfParticles = (loginAnimationCanvas.height * loginAnimationCanvas.width) / 9000;
        const accentColor = getComputedStyle(body).getPropertyValue('--accent-color').trim();
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .5) - .25;
            let directionY = (Math.random() * .5) - .25;
            particlesArray.push({ x, y, directionX, directionY, size, color: accentColor });
        }
    }
    function connectParticles() {
        let opacityValue = 1;
        const accentColor = getComputedStyle(body).getPropertyValue('--accent-color').trim();
        const accentRgb = hexToRgb(accentColor);
        if (!accentRgb) return;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                                 ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (loginAnimationCanvas.width / 7) * (loginAnimationCanvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    loginAnimationCtx.strokeStyle = `rgba(${accentRgb}, ${opacityValue})`;
                    loginAnimationCtx.lineWidth = 0.5;
                    loginAnimationCtx.beginPath();
                    loginAnimationCtx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    loginAnimationCtx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    loginAnimationCtx.stroke();
                }
            }
        }
    }
    function animateLoginBackground() {
        requestAnimationFrame(animateLoginBackground);
        if (!loginPage.classList.contains('active')) {
            loginAnimationCtx.clearRect(0, 0, innerWidth, innerHeight);
            return;
        };
        
        loginAnimationCtx.clearRect(0, 0, innerWidth, innerHeight);
        const accentColor = getComputedStyle(body).getPropertyValue('--accent-color').trim();
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].color = accentColor;
            loginAnimationCtx.beginPath();
            loginAnimationCtx.arc(particlesArray[i].x, particlesArray[i].y, particlesArray[i].size, 0, Math.PI * 2, false);
            loginAnimationCtx.fillStyle = particlesArray[i].color;
            loginAnimationCtx.fill();
            if (particlesArray[i].x + particlesArray[i].size > loginAnimationCanvas.width || particlesArray[i].x - particlesArray[i].size < 0) {
                particlesArray[i].directionX = -particlesArray[i].directionX;
            }
            if (particlesArray[i].y + particlesArray[i].size > loginAnimationCanvas.height || particlesArray[i].y - particlesArray[i].size < 0) {
                particlesArray[i].directionY = -particlesArray[i].directionY;
            }
            particlesArray[i].x += particlesArray[i].directionX;
            particlesArray[i].y += particlesArray[i].directionY;
        }
        connectParticles();
    }
    // --- END: PROFESSIONAL LOGIN PAGE ANIMATION ---
    // --- START: DATA HANDLING FUNCTIONS ---
    function getFromStorage(key, defaultValue) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.error(`Error parsing JSON from localStorage key "${key}":`, e);
            return defaultValue;
        }
    }
    function getUsersDB() { return getFromStorage(USERS_DB_KEY, {}); }
    function getOpinions() { return getFromStorage(OPINIONS_DB_KEY, []); }
    function getRatings() { return getFromStorage(RATINGS_DB_KEY, []); }
    function getCoursesDB() {
        let courses = getFromStorage(COURSES_DB_KEY, null);
        if (!courses) {
            localStorage.setItem(COURSES_DB_KEY, JSON.stringify(initialCoursesData));
            return initialCoursesData;
        }
        return courses;
    }
    function getContentDB() { return getFromStorage(CONTENT_DB_KEY, {}); }
    function getSiteSettings() {
        const defaults = { 
            siteName: "Mora for Studying",
            pointsToUnlock: 250, 
            pointsPerLecture: 9, 
            bannerText: "شكر خاص وتقدير لإدارة المعهد وأعضاء هيئة التدريس على دعمهم المتواصل وجهودهم المبذولة في سبيل عمل هذا الويب سايت التعليمي.",
            coursesUnlocked: false,
            meetingsUnlocked: false,
            meetingUrl: ''
        };
        return getFromStorage(SITE_SETTINGS_KEY, defaults);
    }
    function getAiToolsDB() {
        let tools = getFromStorage(AI_TOOLS_DB_KEY, null);
        if (!tools) {
            localStorage.setItem(AI_TOOLS_DB_KEY, JSON.stringify(initialAiTools));
            return initialAiTools;
        }
        return tools;
    }
    function getAnnouncement() { return getFromStorage(ANNOUNCEMENT_KEY, null); }
    function getTextContentDB() { 
        let texts = getFromStorage(TEXT_CONTENT_KEY, null);
        if (!texts) {
            localStorage.setItem(TEXT_CONTENT_KEY, JSON.stringify(translations.ar));
            return translations.ar;
        }
        return texts;
    }
    function saveUsersDB(db) { localStorage.setItem(USERS_DB_KEY, JSON.stringify(db)); }
    function saveOpinions(opinionsArray) { localStorage.setItem(OPINIONS_DB_KEY, JSON.stringify(opinionsArray)); }
    function saveRatings(ratingsArray) { localStorage.setItem(RATINGS_DB_KEY, JSON.stringify(ratingsArray)); }
    function saveCoursesDB(data) { localStorage.setItem(COURSES_DB_KEY, JSON.stringify(data)); }
    function saveContentDB(data) { localStorage.setItem(CONTENT_DB_KEY, JSON.stringify(data)); }
    function saveSiteSettings(settings) { localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(settings)); }
    function saveAiToolsDB(tools) { localStorage.setItem(AI_TOOLS_DB_KEY, JSON.stringify(tools)); }
    function saveAnnouncement(announcement) { localStorage.setItem(ANNOUNCEMENT_KEY, JSON.stringify(announcement)); }
    function saveTextContentDB(texts) { localStorage.setItem(TEXT_CONTENT_KEY, JSON.stringify(texts)); }
    function getUserData(username, key) { const db = getUsersDB(); return db[username]?.data?.[key]; }
    function getUserProfile(username) { const db = getUsersDB(); return db[username]?.profile; }
    function setUserData(username, key, value) { const db = getUsersDB(); if (db[username]) { if (!db[username].data) { db[username].data = {}; } db[username].data[key] = value; saveUsersDB(db); } }
    function getCurrentUsername() { return localStorage.getItem(CURRENT_USER_KEY); }
    function getCurrentUserRole() { return localStorage.getItem('moraCurrentUserRole'); }
    // --- END: DATA HANDLING FUNCTIONS ---
    function getPoints() { const username = getCurrentUsername(); if (!username || username === 'admen') return 0; return getUserData(username, 'points') || 0; }
    
    function addPoints(amount, contentId) {
        const username = getCurrentUsername();
        if (!username || username === 'admen') return;
        let viewedContent = getUserData(username, 'viewedContent') || [];
        if (viewedContent.includes(contentId)) {
            return; // Already earned points for this item
        }
        
        viewedContent.push(contentId);
        setUserData(username, 'viewedContent', viewedContent);
        let currentPoints = getPoints();
        currentPoints += amount;
        setUserData(username, 'points', currentPoints);
        
        pointsDisplay.textContent = currentPoints;
        pointsNotification.classList.remove('show');
        void pointsNotification.offsetWidth;
        pointsNotification.classList.add('show');
        updateCoursesButtonState();
    }
    
    function updateCoursesButtonState() {
        const settings = getSiteSettings();
        const points = getPoints();
        if (settings.coursesUnlocked || points >= settings.pointsToUnlock) {
            coursesBtn.classList.remove('locked');
            coursesIcon.className = 'fas fa-crown'; 
        } else {
            coursesBtn.classList.add('locked');
            coursesIcon.className = 'fas fa-lock';
        }
    }
    function updateUserActivity() {
        const username = getCurrentUsername();
        if (username && username !== 'admen') {
            setUserData(username, 'last_active', Date.now());
        }
    }
    
    function setLanguage(lang) {
        htmlEl.lang = lang;
        htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
        const siteTexts = getTextContentDB();
        const langTexts = lang === 'ar' ? siteTexts : translations.en;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (langTexts[key]) {
                const settings = getSiteSettings();
                let text = langTexts[key];
                text = text.replace('__UNLOCK__', settings.pointsToUnlock).replace('__POINTS__', settings.pointsPerLecture);
                
                if (key.includes('courses_locked_msg') || key.includes('points_info_main')) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
                }
            }
        });
        localStorage.setItem('moraLectureHubLang', lang);
        updateMajors(yearSelect.value, majorSelect);
        updateActiveUI();
    }
    
    function setSetting(type, value) { 
        if (type === 'theme') { 
            localStorage.setItem('moraLectureHubTheme', value.name); 
            body.style.setProperty('--accent-color', value.accent); 
            body.style.setProperty('--accent-glow', value.glow); 
            body.style.setProperty('--accent-hover', value.hover); 
            if(loginPage.classList.contains('active')) setupLoginAnimation();
        } else if (type === 'mode') { 
            body.className = value; 
            localStorage.setItem('moraLectureHubMode', value); 
        } 
        updateActiveUI(); 
    }
    function populateThemeButtons() { 
        const themeContainer = document.getElementById('theme-switcher'); 
        themeContainer.innerHTML = ''; 
        themes.forEach(theme => { 
            const btn = document.createElement('button'); 
            btn.className = 'theme-btn'; 
            btn.title = theme.name; 
            btn.innerHTML = `<span class="theme-swatch" style="background-color:${theme.accent};"></span> <span>${theme.name}</span>`; 
            btn.addEventListener('click', () => setSetting('theme', theme)); 
            themeContainer.appendChild(btn); 
        }); 
    }
    function updateActiveUI() { 
        const lang = localStorage.getItem('moraLectureHubLang') || 'ar'; 
        document.querySelectorAll('#lang-switcher .settings-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang)); 
        const themeName = localStorage.getItem('moraLectureHubTheme') || 'Forest'; 
        const theme = themes.find(t => t.name === themeName) || themes[0]; 
        document.querySelectorAll('#theme-switcher .theme-btn').forEach(btn => btn.classList.toggle('active', btn.title === themeName)); 
        const mode = localStorage.getItem('moraLectureHubMode') || 'mode-dark'; 
        document.querySelectorAll('#mode-switcher .settings-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode)); 
    }
    function showAuthMessage(messageKey) { 
        const lang = htmlEl.lang || 'ar'; 
        const siteTexts = getTextContentDB(); 
        authMessage.textContent = siteTexts[messageKey] || translations.en[messageKey] || "Action completed."; 
        authMessage.style.display = 'block'; 
        setTimeout(() => { authMessage.style.display = 'none'; }, 2500); 
    }
    
    function updateMajors(year, majorDropdown) {
        const lang = htmlEl.lang || 'ar';
        const siteTexts = getTextContentDB();
        majorDropdown.innerHTML = `<option value="" disabled selected>${siteTexts.major_placeholder}</option>`;
        let majors = {};
        if (year === '1' || year === '2') {
            majors = { "أعمال دولية": "major_option_1", "نظم معلومات": "major_option_2" };
        }
        for (const majorName in majors) {
            const key = majors[majorName];
            majorDropdown.innerHTML += `<option value="${majorName}" data-key="${key}">${siteTexts[key]}</option>`;
        }
    }
    
    function generateNumericCaptcha() {
        const ctx = captchaCanvas.getContext('2d');
        captchaText = Math.random().toString().substring(2, 8);
        const text_color = getComputedStyle(body).getPropertyValue('--primary-text-color');
        ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        ctx.fillStyle = getComputedStyle(body).getPropertyValue('--secondary-bg');
        ctx.fillRect(0, 0, captchaCanvas.width, captchaCanvas.height);
        ctx.font = 'bold 24px "Orbitron", sans-serif';
        ctx.fillStyle = text_color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < captchaText.length; i++) {
            const x = 18 + i * 16;
            const y = captchaCanvas.height / 2 + (Math.random() - 0.5) * 8;
            const angle = (Math.random() - 0.5) * 0.4;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillText(captchaText[i], 0, 0);
            ctx.restore();
        }
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
            ctx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
            ctx.strokeStyle = text_color;
            ctx.globalAlpha = 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1.0;
        }
    }
    function updateSiteNameUI() {
        const settings = getSiteSettings();
        const siteName = settings.siteName || "Mora for Studying";
        document.title = siteName;
        document.querySelector('.login-header .welcome-text').textContent = `Welcome to ${siteName}`;
        document.getElementById('admin-site-name-header').textContent = `${siteName} Admin`;
        const aboutTitle = document.querySelector('#about-modal h3');
        if (aboutTitle) aboutTitle.textContent = siteName;
    }
    function initializeApp() {
        getTextContentDB(); // Initialize texts
        getAiToolsDB(); // Initialize AI Tools
        const lang = localStorage.getItem('moraLectureHubLang') || 'ar'; 
        const themeName = localStorage.getItem('moraLectureHubTheme') || 'Forest'; 
        const theme = themes.find(t => t.name === themeName) || themes[0];
        const mode = localStorage.getItem('moraLectureHubMode') || 'mode-dark';
        setLanguage(lang);
        setSetting('theme', theme);
        setSetting('mode', mode);
        getCoursesDB(); // Initialize courses in localStorage
        const settings = getSiteSettings(); // Load settings
        updateSiteNameUI();
        document.querySelector('.scrolling-banner p').textContent = settings.bannerText;
        loadingPage.classList.add('active');
        
        setTimeout(() => {
            const loggedInUser = getCurrentUsername();
            const userRole = getCurrentUserRole();
            loadingPage.classList.remove('active');
            if (loggedInUser) {
                if (userRole === 'admin') {
                    showAdminPanel();
                } else {
                    const userData = getUserProfile(loggedInUser);
                    if (userData) {
                        populateMainPage(userData);
                        mainPage.classList.add('active');
                        checkAnnouncement();
                    } else { // Data inconsistency
                        localStorage.clear();
                        location.reload();
                    }
                }
            } else {
                loginPage.classList.add('active');
                showAuthView('choice');
            }
        }, 2500);
    }
    
    function showAuthView(viewName, extras = {}) {
        [authChoiceView, createAccountView, loginView].forEach(v => v.classList.remove('active'));
        if (viewName === 'choice') {
            authChoiceView.classList.add('active');
        } else if (viewName === 'create') {
            createAccountView.classList.add('active');
            generateNumericCaptcha();
            captchaInput.value = '';
             fetch('https://ipapi.co/json/')
                .then(res => res.json())
                .then(data => {
                    document.getElementById('create-country').value = data.country_name || 'N/A';
                    document.getElementById('create-governorate').value = data.region || 'N/A';
                })
                .catch(() => {
                    document.getElementById('create-country').value = 'Unknown';
                    document.getElementById('create-governorate').value = 'Unknown';
                });
        } else if (viewName === 'login') {
            const loginNameInput = document.getElementById('login-name');
            const loginPasswordInput = document.getElementById('login-password');
            const lastUser = localStorage.getItem(LAST_USER_KEY);
            const users = getUsersDB();
            
            loginNameInput.value = lastUser || Object.keys(users).find(u => u !== 'admen') || '';
            loginPasswordInput.value = '';
            if (extras.newPassword) {
                 loginPasswordInput.value = extras.newPassword;
                 loginNameInput.value = extras.newName;
            }
            [loginNameInput, loginPasswordInput].forEach(input => {
                const label = input.parentElement.querySelector('label') || input.parentElement.parentElement.querySelector('label');
                if (input.value && label) {
                    label.classList.add('active-programmatically'); 
                } else if(label) {
                    label.classList.remove('active-programmatically');
                }
            });
            loginView.classList.add('active');
        }
    }
    function populateMainPage(userData) {
        updateUserActivity();
        const lang = htmlEl.lang || 'ar';
        const coursesData = getCoursesDB();
        const siteTexts = getTextContentDB();
        const semesterText = siteTexts[`semester_${userData.semester}`] || userData.semester; 
        const yearText = siteTexts[`year_${userData.year}`] || userData.year; 
        const majorText = userData.major; 
        welcomeMessageName.textContent = `${siteTexts.welcome_back}${userData.name}`; 
        welcomeMessageDetails.textContent = `${majorText} - ${yearText} - ${semesterText}`; 
        pointsDisplay.textContent = getPoints(); 
        updateCoursesButtonState(); 
        checkRatedStatus(); 
        coursesContainer.innerHTML = ""; 
        const subjects = coursesData[userData.year]?.[majorText]?.[userData.semester] || [];
        if (subjects.length > 0) { 
            subjects.forEach((subject, index) => { 
                const card = document.createElement('div'); 
                card.className = 'course-card'; 
                card.innerHTML = `<i class="fas ${getIconForCourse(subject)}"></i><h3>${subject}</h3>`; 
                card.style.animationDelay = `${0.1 * index}s`; 
                card.addEventListener('click', () => showSubjectContent(subject, 'all')); 
                coursesContainer.appendChild(card); 
            }); 
        } 
        currentView = 'subjects'; 
    }
    
    function getIconForCourse(e) { 
        const t = e.toLowerCase(); 
        return t.includes("محاسبة") || t.includes("مالية") || t.includes("تكاليف") || t.includes("ضريبية") ? "fa-calculator" : 
               t.includes("اقتصاد") ? "fa-chart-line" : 
               t.includes("قانون") ? "fa-gavel" : 
               t.includes("إدارة") || t.includes("اعمال") || t.includes("سلوك") || t.includes("تسويق") ? "fa-briefcase" : 
               t.includes("حاسب") || t.includes("معلومات") || t.includes("بيانات") || t.includes("برامج") || t.includes("شبكات") ? "fa-laptop-code" : 
               t.includes("رياضيات") || t.includes("احصاء") || t.includes("كمية") ? "fa-square-root-alt" : 
               t.includes("لغة") || t.includes("اتصال") ? "fa-language" : 
               t.includes("حقوق") ? "fa-landmark" : 
               t.includes("مصرفية") || t.includes("بنوك") ? "fa-university" : "fa-book-open"; 
    }
    function getCurrentUserData() { 
        const username = getCurrentUsername(); 
        if(!username) return null; 
        return getUserProfile(username); 
    }
    
    function showSubjectContent(subjectTitle, contentType) {
        updateUserActivity();
        const lang = htmlEl.lang || 'ar';
        const contentDB = getContentDB();
        const siteTexts = getTextContentDB();
        const subjectContent = contentDB[subjectTitle] || { lectures: [], pdfs: [], sections: [] };
        const contentModalEl = document.getElementById('lecture-content');
        const settings = getSiteSettings();
        const createContentItem = (item, typeKey) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'detail-item unlocked'; 
            let iconClass = 'fa-file-alt';
            if (typeKey === 'pdfs') iconClass = 'fa-file-pdf';
            if (typeKey === 'sections') iconClass = 'fa-layer-group';
            if (item.type === 'video') iconClass = 'fa-play-circle';
            itemEl.innerHTML = `<span>${item.title}</span><i class="fas ${iconClass} lock-icon"></i>`;
            itemEl.addEventListener('click', () => {
                const contentId = `${subjectTitle}-${item.id}`;
                if (typeKey === 'lectures') addPoints(settings.pointsPerLecture, contentId); 
                
                if (item.type === 'video' || item.type === 'pdf') {
                    showRedirectModal(null, () => window.open(item.url, '_blank'));
                } else {
                    contentModalEl.innerHTML = `<h3>${item.title}</h3><p>${item.content.replace(/\n/g, '<br>')}</p>`;
                    lectureContentModal.classList.add('active');
                }
            });
            return itemEl;
        };
        
        const renderList = (type, listTitle) => {
            detailsViewList.innerHTML = '';
            const contentArray = subjectContent[type] || [];
            const publishedContent = contentArray.filter(item => item.isPublished);
            if (publishedContent.length > 0) {
                 publishedContent.forEach(item => {
                     detailsViewList.appendChild(createContentItem(item, type));
                 });
            } else {
                 detailsViewList.innerHTML = `<p style="text-align:center; opacity:0.7; margin-top: 20px;">${siteTexts[`locked_${type}_msg`]}</p>`;
            }
        };
        if (contentType === 'all') {
            detailsViewTitle.textContent = subjectTitle;
            detailsViewList.innerHTML = ''; 
            
            const renderSection = (type, title) => {
                const publishedContent = (subjectContent[type] || []).filter(item => item.isPublished);
                if (publishedContent.length > 0) {
                    detailsViewList.innerHTML += `<h4 style="margin-top: 20px; padding: 0 15px;">${title}</h4>`;
                    publishedContent.forEach(item => detailsViewList.appendChild(createContentItem(item, type)));
                }
            };
            
            renderSection('lectures', 'المحاضرات');
            renderSection('pdfs', 'الكتب والمراجع');
            renderSection('sections', 'السكاشن');
            if (detailsViewList.innerHTML.trim() === '') {
                 detailsViewList.innerHTML = `<p style="text-align:center; opacity:0.7; margin-top: 20px;">لا يوجد محتوى منشور لهذه المادة حالياً.</p>`;
            }
        } else {
            const typeKey = contentType.replace('nav_', '');
            detailsViewTitle.textContent = `${subjectTitle} - ${siteTexts[`nav_${typeKey}`]}`;
            renderList(typeKey);
        }
        
        mainPage.classList.add('details-active');
    }
    
    function showContentListForType(contentType) {
        updateUserActivity();
        const userData = getCurrentUserData();
        if (!userData) return;
        const coursesData = getCoursesDB();
        const subjects = coursesData[userData.year]?.[userData.major]?.[userData.semester] || [];
        const siteTexts = getTextContentDB();
        
        detailsViewTitle.textContent = siteTexts[`nav_${contentType}`];
        detailsViewList.innerHTML = '';
        
        subjects.forEach((subject) => {
            const item = document.createElement('div');
            item.className = 'detail-item';
            item.innerHTML = `<span>${subject}</span><i class="fas fa-chevron-left lock-icon"></i>`;
            item.addEventListener('click', () => showSubjectContent(subject, contentType));
            detailsViewList.appendChild(item);
        });
        
        mainPage.classList.add('details-active');
    }
    function displayVideoCategories() { 
        updateUserActivity(); 
        const lang = htmlEl.lang || 'ar'; 
        coursesContainer.innerHTML = ""; 
        Object.keys(videoCoursesData).forEach((key, index) => { 
            const category = videoCoursesData[key]; 
            const card = document.createElement('div'); 
            card.className = 'course-card'; 
            card.innerHTML = `<i class="${category.icon}"></i><h3>${lang === 'ar' ? category.title_ar : category.title_en}</h3>`; 
            card.style.animationDelay = `${0.1 * index}s`; 
            card.addEventListener('click', () => showVideoList(key)); 
            coursesContainer.appendChild(card); 
        }); 
        currentView = 'videos'; 
    }
    function showVideoList(categoryKey) { 
        updateUserActivity(); 
        const lang = htmlEl.lang || 'ar'; 
        const category = videoCoursesData[categoryKey]; 
        if (!category) return; 
        detailsViewTitle.textContent = lang === 'ar' ? category.title_ar : category.title_en; 
        detailsViewList.innerHTML = ''; 
        category.videos.forEach((video, index) => { 
            const item = document.createElement('div'); 
            item.className = 'detail-item'; 
            item.style.animationDelay = `${index * 0.05}s`; 
            item.innerHTML = `<span>${video.title}</span> <i class="fas fa-play-circle lock-icon"></i>`; 
            item.addEventListener('click', () => showVideoPlayerModal(video.embed_url)); 
            detailsViewList.appendChild(item); 
        }); 
        mainPage.classList.add('details-active'); 
    }
    function showVideoPlayerModal(embedUrl) { 
        updateUserActivity(); 
        const videoPlayerModal = document.getElementById('video-player-modal'); 
        const videoContainer = document.getElementById('video-player-container'); 
        if (!videoPlayerModal || !videoContainer) return; 
        videoContainer.innerHTML = `<iframe src="${embedUrl}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; 
        videoPlayerModal.classList.add('active'); 
    }
    
    // --- POMODORO TIMER FUNCTIONS ---
    function formatTime(seconds) { 
        const m = Math.floor(seconds / 60); 
        const s = seconds % 60; 
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`; 
    }
    function updateTimerDisplay() { 
        timerDisplay.textContent = formatTime(timeRemaining); 
    }
    function updatePomodoroUI() { 
        const siteTexts = getTextContentDB(); 
        if (pomodoroState === 'work') { 
            timerContainer.classList.remove('break-mode'); 
            timerContainer.classList.add('work-mode'); 
            pomodoroMode.textContent = siteTexts.pomodoro_mode_work; 
        } else { 
            timerContainer.classList.remove('work-mode'); 
            timerContainer.classList.add('break-mode'); 
            pomodoroMode.textContent = siteTexts.pomodoro_mode_break; 
        } 
        pomodoroCycles.textContent = `${siteTexts.pomodoro_cycles} ${cycleCount} / 4`; 
    }
    function startPauseTimer() { 
        const siteTexts = getTextContentDB(); 
        if (isTimerRunning) { 
            clearInterval(timerInterval); 
            startPauseTimerBtn.textContent = siteTexts.timer_start_btn; 
            startPauseTimerBtn.classList.remove('running'); 
            timerLiveIndicator.classList.remove('active'); 
            timerLiveText.classList.remove('active'); 
        } else { 
            timerLiveIndicator.classList.add('active'); 
            timerLiveText.classList.add('active'); 
            timerInterval = setInterval(() => { 
                timeRemaining--; 
                updateTimerDisplay(); 
                if (timeRemaining <= 0) { 
                    clearInterval(timerInterval); 
                    const completedState = pomodoroState; 
                    if (pomodoroState === 'work') { 
                        pomodoroState = 'break'; 
                        timeRemaining = breakDuration; 
                        if (cycleCount >= 4) { 
                            cycleCount = 1; 
                        } 
                    } else { 
                        pomodoroState = 'work'; 
                        timeRemaining = workDuration; 
                        cycleCount++; 
                    } 
                    updatePomodoroUI(); 
                    updateTimerDisplay(); 
                    isTimerRunning = false; 
                    startPauseTimerBtn.textContent = siteTexts.timer_start_btn; 
                    startPauseTimerBtn.classList.remove('running'); 
                    timerLiveIndicator.classList.remove('active'); 
                    timerLiveText.classList.remove('active'); 
                    if (completedState === 'work') { 
                        showAuthMessage('pomodoro_work_done'); 
                    } else { 
                        showAuthMessage('pomodoro_break_done'); 
                    } 
                } 
            }, 1000); 
            startPauseTimerBtn.textContent = siteTexts.timer_pause_btn; 
            startPauseTimerBtn.classList.add('running'); 
        } 
        isTimerRunning = !isTimerRunning; 
    }
    function resetTimer() { 
        const siteTexts = getTextContentDB(); 
        clearInterval(timerInterval); 
        isTimerRunning = false; 
        pomodoroState = 'work'; 
        cycleCount = 1; 
        timeRemaining = workDuration; 
        updatePomodoroUI(); 
        updateTimerDisplay(); 
        startPauseTimerBtn.textContent = siteTexts.timer_start_btn; 
        startPauseTimerBtn.classList.remove('running'); 
        timerLiveIndicator.classList.remove('active'); 
        timerLiveText.classList.remove('active'); 
    }
    
    // --- OPINIONS FUNCTIONS ---
    function renderOpinions() {
        const opinions = getOpinions();
        const siteTexts = getTextContentDB();
        opinionsList.innerHTML = '';
        if (opinions.length === 0) {
            opinionsList.innerHTML = `<p style="text-align:center; opacity: 0.7;">لا توجد آراء حالياً. كن أول من يشارك رأيه!</p>`;
        } else {
            opinions.forEach((opinion, index) => {
                const card = document.createElement('div');
                card.className = 'opinion-card';
                card.style.animationDelay = `${index * 0.1}s`;
                const date = new Date(opinion.timestamp).toLocaleString();
                const yearText = siteTexts[`year_${opinion.year}`] || opinion.year;
                const majorText = opinion.major;
                card.innerHTML = `<div class="opinion-card-header"><div class="opinion-author-details"><span class="opinion-author">${opinion.name}</span><span class="opinion-meta">${majorText} - ${yearText}</span></div><span class="opinion-timestamp">${date}</span></div><p class="opinion-text">${opinion.opinion}</p>`;
                opinionsList.appendChild(card);
            });
        }
    }
    
    function handleOpinionSubmit(e) {
        e.preventDefault();
        const opinionText = opinionTextarea.value.trim();
        if (!opinionText) return;
        const currentUser = getCurrentUsername();
        const userProfile = getUserProfile(currentUser);
        if (!currentUser || !userProfile) return;
        const newOpinion = {
            id: Date.now(),
            name: currentUser,
            year: userProfile.year,
            major: userProfile.major,
            opinion: opinionText,
            timestamp: new Date().toISOString()
        };
        const opinions = getOpinions();
        opinions.unshift(newOpinion);
        saveOpinions(opinions);
        
        renderOpinions();
        opinionTextarea.value = '';
        showAuthMessage('opinion_success');
    }
    // --- ADMIN PANEL FUNCTIONS ---
    function showAdminPanel() { 
        loginPage.classList.remove('active'); 
        mainPage.classList.remove('active'); 
        adminPanel.classList.add('active'); 
        populateAdminPanel(); 
        clearInterval(activeUserInterval); 
        activeUserInterval = setInterval(populateActiveUsers, 15000); 
    }
    function populateAdminPanel() { 
        populateAdminStats(); 
        populateAdminOpinions(); 
        populateStudentList(); 
        populateSiteSettings(); 
        populateAdminTextEditor(); 
        populateActiveUsers(); 
        populateAdminRatings(); 
        populateAdminAiTools(); 
    }
    function populateActiveUsers() {
        const users = getUsersDB();
        const now = Date.now();
        const fiveMinutes = 5 * 60 * 1000;
        activeStudentsListEl.innerHTML = '';
        let activeCount = 0;
        Object.keys(users).forEach(username => {
            if (username !== 'admen') {
                const lastActive = users[username].data?.last_active;
                if (lastActive && (now - lastActive < fiveMinutes)) {
                    const li = document.createElement('li');
                    li.textContent = username;
                    activeStudentsListEl.appendChild(li);
                    activeCount++;
                }
            }
        });
        if (activeCount === 0) {
            activeStudentsListEl.innerHTML = `<li>لا يوجد طلاب نشطون حاليًا.</li>`;
        }
    }
    function populateAdminStats() {
        const users = getUsersDB();
        const studentCount = Object.keys(users).filter(user => user !== 'admen').length;
        studentCountEl.textContent = studentCount;
        const opinions = getOpinions();
        opinionsCountEl.textContent = opinions.length;
        const coursesData = getCoursesDB();
        let subjectsCount = 0;
        Object.values(coursesData).forEach(year => Object.values(year).forEach(major => Object.values(major).forEach(semester => { subjectsCount += semester.length; })));
        subjectsCountEl.textContent = subjectsCount;
        let topStudent = { name: '-', points: -1 };
        Object.keys(users).forEach(username => {
            if (username !== 'admen') {
                const userPoints = users[username].data?.points || 0;
                if (userPoints > topStudent.points) {
                    topStudent = { name: username, points: userPoints };
                }
            }
        });
        topStudentEl.textContent = topStudent.points > -1 ? `${topStudent.name} (${topStudent.points} pts)` : '-';
    }
    function populateAdminOpinions() {
        const opinions = getOpinions();
        const siteTexts = getTextContentDB();
        const adminOpinionsList = document.getElementById('admin-opinions-list');
        adminOpinionsList.innerHTML = '';
        if (opinions.length === 0) {
            adminOpinionsList.innerHTML = `<p style="text-align:center; opacity: 0.7;">لا توجد آراء لعرضها.</p>`;
        } else {
            opinions.forEach((opinion) => {
                const card = document.createElement('div');
                card.className = 'opinion-card';
                const date = new Date(opinion.timestamp).toLocaleString();
                const yearText = siteTexts[`year_${opinion.year}`] || opinion.year;
                const majorText = opinion.major;
                card.innerHTML = `<button class="delete-btn" data-id="${opinion.id}" title="حذف الرأي">&times;</button><div class="opinion-card-header"><div class="opinion-author-details"><span class="opinion-author">${opinion.name}</span><span class="opinion-meta">${majorText} - ${yearText}</span></div><span class="opinion-timestamp">${date}</span></div><p class="opinion-text">${opinion.opinion}</p>`;
                adminOpinionsList.appendChild(card);
            });
        }
    }
    function populateStudentList() {
        const users = getUsersDB();
        const lang = htmlEl.lang || 'ar';
        const siteTexts = getTextContentDB();
        let tableHTML = `<table><thead><tr><th>الاسم</th><th>الفرقة/الشعبة</th><th>كلمة المرور</th><th>الدولة/المحافظة</th><th>النقاط</th><th>الإجراءات</th></tr></thead><tbody>`;
        Object.keys(users).forEach(username => {
            if (username === 'admen') return;
            const user = users[username];
            const profile = user.profile;
            const data = user.data || {};
            const isBanned = data.banned || false;
            const yearText = siteTexts[`year_${profile.year}`] || profile.year;
            const points = data.points || 0;
            const location = `${profile.governorate || 'N/A'}, ${profile.country || 'N/A'}`;
            tableHTML += `<tr class="${isBanned ? 'banned' : ''}"><td>${profile.name}</td><td>${yearText} - ${profile.major}</td><td>${user.password}</td><td>${location}</td><td>${points}</td><td><div class="action-btns"><button class="ban-btn" data-username="${profile.name}">${isBanned ? 'فك الحظر' : 'حظر'}</button><button class="delete-student-btn" data-username="${profile.name}">حذف</button></div></td></tr>`;
        });
        tableHTML += `</tbody></table>`;
        adminStudentListContainer.innerHTML = tableHTML;
    }
    
    function createContentManagementUI(contentType, container) {
        container.innerHTML = `<form class="content-management-form"><select class="input-group admin-year-select" required><option value="">اختر الفرقة</option><option value="1">الأولى</option><option value="2">الثانية</option></select><select class="input-group admin-major-select" required><option value="">اختر الشعبة</option></select><select class="input-group admin-semester-select" required><option value="1">الفصل الدراسي الأول</option><option value="2">الفصل الدراسي الثاني</option></select></form><ul class="admin-subjects-list"></ul>`;
        const yearSelectAdmin = container.querySelector('.admin-year-select');
        const majorSelectAdmin = container.querySelector('.admin-major-select');
        const semesterSelectAdmin = container.querySelector('.admin-semester-select');
        const subjectsList = container.querySelector('.admin-subjects-list');
        const render = () => renderSubjectsForAdmin(yearSelectAdmin.value, majorSelectAdmin.value, semesterSelectAdmin.value, subjectsList, contentType);
        
        yearSelectAdmin.addEventListener('change', () => { 
            updateMajors(yearSelectAdmin.value, majorSelectAdmin); 
            semesterSelectAdmin.value = '1'; 
            render(); 
        });
        majorSelectAdmin.addEventListener('change', () => { 
            semesterSelectAdmin.value = '1'; 
            render(); 
        });
        semesterSelectAdmin.addEventListener('change', render);
    }
    
    function renderSubjectsForAdmin(year, major, semester, listElement, contentType) {
        listElement.innerHTML = '';
        if (year && major && semester) {
            const coursesData = getCoursesDB();
            const subjects = coursesData[year]?.[major]?.[semester] || [];
            if(subjects.length === 0) {
                listElement.innerHTML = `<li>لا توجد مواد دراسية لهذا الاختيار.</li>`;
            } else {
                subjects.forEach((subject) => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span>${subject}</span><button class="manage-btn" data-subject="${subject}"><i class="fas fa-edit"></i> إدارة</button>`;
                    li.querySelector('.manage-btn').addEventListener('click', () => openContentEditor(subject, contentType));
                    listElement.appendChild(li);
                });
            }
        }
    }
    
    function openContentEditor(subject, contentType) {
        const lang = htmlEl.lang || 'ar';
        const typeTranslations = {lectures: 'المحاضرات', pdfs: 'الكتب', sections: 'السكاشن'};
        document.getElementById('content-editor-title').textContent = `إدارة ${typeTranslations[contentType]}: ${subject}`;
        const editorContent = document.getElementById('content-editor-content');
        
        const contentForms = {
            lectures: `
                <div id="lectures-list-admin" class="details-view-list"></div>
                <form id="add-lecture-form" class="content-management-form" style="flex-direction:column; gap: 15px; margin-top: 15px;">
                    <div class="input-group"><input type="text" id="new-lecture-title" placeholder=" " required><label>عنوان المحاضرة (مثال: المحاضرة الأولى)</label></div>
                    <div class="input-group"><select id="new-lecture-type"><option value="text">نص</option><option value="video">فيديو (رابط يوتيوب)</option></select></div>
                    <div class="input-group" id="lecture-content-input-area"><textarea id="new-lecture-content" placeholder=" " style="height: 100px;"></textarea><label>محتوى المحاضرة</label></div>
                    <button type="submit" class="submit-btn" style="font-size: 1rem; padding: 10px; margin-top: 0;">إضافة محاضرة</button>
                </form>`,
            pdfs: `
                <div id="pdfs-list-admin" class="details-view-list"></div>
                <form id="add-pdf-form" class="content-management-form" style="flex-direction:column; gap: 15px; margin-top: 15px;">
                    <div class="input-group"><input type="text" id="new-pdf-title" placeholder=" " required><label>عنوان الكتاب</label></div>
                    <div class="input-group"><input type="url" id="new-pdf-url" placeholder=" " required><label>رابط الملف</label></div>
                    <button type="submit" class="submit-btn" style="font-size: 1rem; padding: 10px; margin-top: 0;">إضافة كتاب</button>
                </form>`,
            sections: `
                <div id="sections-list-admin" class="details-view-list"></div>
                 <form id="add-section-form" class="content-management-form" style="flex-direction:column; gap: 15px; margin-top: 15px;">
                    <div class="input-group"><input type="text" id="new-section-title" placeholder=" " required><label>عنوان السكشن</label></div>
                    <div class="input-group"><textarea id="new-section-content" placeholder=" " style="height: 100px;"></textarea><label>محتوى السكشن</label></div>
                    <button type="submit" class="submit-btn" style="font-size: 1rem; padding: 10px; margin-top: 0;">إضافة سكشن</button>
                </form>`
        };
        editorContent.innerHTML = `<div class="editor-section">${contentForms[contentType]}</div>`;
        
        renderAdminContentLists(subject, contentType);
        contentEditorModal.classList.add('active');
        if (contentType === 'lectures') {
            document.getElementById('add-lecture-form').addEventListener('submit', (e) => handleAddContent(e, subject, 'lectures'));
            document.getElementById('new-lecture-type').addEventListener('change', toggleLectureInput);
        } else if (contentType === 'pdfs') {
            document.getElementById('add-pdf-form').addEventListener('submit', (e) => handleAddContent(e, subject, 'pdfs'));
        } else if (contentType === 'sections') {
            document.getElementById('add-section-form').addEventListener('submit', (e) => handleAddContent(e, subject, 'sections'));
        }
    }
    
    function toggleLectureInput() {
        const type = document.getElementById('new-lecture-type').value;
        const area = document.getElementById('lecture-content-input-area');
        if (type === 'video') {
            area.innerHTML = `<input type="url" id="new-lecture-content" placeholder=" " required><label>رابط فيديو يوتيوب (Embed)</label>`;
        } else {
            area.innerHTML = `<textarea id="new-lecture-content" placeholder=" " style="height: 100px;"></textarea><label>محتوى المحاضرة</label>`;
        }
    }
    
    function handleAddContent(e, subject, type) {
        e.preventDefault();
        const contentDB = getContentDB();
        if (!contentDB[subject]) contentDB[subject] = { lectures: [], pdfs: [], sections: [] };
        let newItem = { id: Date.now(), isPublished: false }; // Unique ID + Default to not published
        if (type === 'lectures') {
            const title = document.getElementById('new-lecture-title').value.trim();
            const lectureType = document.getElementById('new-lecture-type').value;
            const content = document.getElementById('new-lecture-content').value.trim();
            if(!title || !content) return;
            newItem = { ...newItem, title, type: lectureType, [lectureType === 'text' ? 'content' : 'url']: content };
        } else if (type === 'pdfs') {
            const title = document.getElementById('new-pdf-title').value.trim();
            const url = document.getElementById('new-pdf-url').value.trim();
            if(!title || !url) return;
            newItem = { ...newItem, title, url, type: 'pdf' };
        } else if (type === 'sections') {
            const title = document.getElementById('new-section-title').value.trim();
            const content = document.getElementById('new-section-content').value.trim();
            if(!title || !content) return;
            newItem = { ...newItem, title, content, type: 'text' };
        }
        
        contentDB[subject][type].push(newItem);
        saveContentDB(contentDB);
        renderAdminContentLists(subject, type);
        e.target.reset();
    }
    
    function handleDeleteContent(subject, type, id) {
        if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
            const contentDB = getContentDB();
            if (contentDB[subject] && contentDB[subject][type]) {
                contentDB[subject][type] = contentDB[subject][type].filter(item => item.id != id);
                saveContentDB(contentDB);
                renderAdminContentLists(subject, type);
            }
        }
    }
    
    function handleTogglePublish(subject, type, id) {
        const contentDB = getContentDB();
        const item = contentDB[subject]?.[type]?.find(i => i.id == id);
        if (item) {
            item.isPublished = !item.isPublished;
            saveContentDB(contentDB);
            renderAdminContentLists(subject, type);
        }
    }
    function renderAdminContentLists(subject, type) {
        const contentDB = getContentDB();
        const subjectContent = contentDB[subject] || { lectures: [], pdfs: [], sections: [] };
        const container = document.getElementById(`${type}-list-admin`);
        
        container.innerHTML = '';
        if (subjectContent[type] && subjectContent[type].length > 0) {
            subjectContent[type].forEach((item) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'detail-item';
                const isPublished = item.isPublished;
                itemEl.innerHTML = `
                    <span>${item.title}</span>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <i class="fas ${isPublished ? 'fa-toggle-on' : 'fa-toggle-off'} publish-toggle ${isPublished ? 'published' : 'not-published'}" data-id="${item.id}" title="${isPublished ? 'إخفاء' : 'نشر'}"></i>
                        <button class="delete-btn" data-id="${item.id}" title="حذف"><i class="fas fa-trash"></i></button>
                    </div>
                `;
                itemEl.querySelector('.delete-btn').addEventListener('click', () => handleDeleteContent(subject, type, item.id));
                itemEl.querySelector('.publish-toggle').addEventListener('click', () => handleTogglePublish(subject, type, item.id));
                container.appendChild(itemEl);
            });
        } else {
             container.innerHTML = `<p style="opacity:0.6; text-align:center; padding: 10px;">لا يوجد محتوى. قم بإضافة جديد من النموذج أدناه.</p>`;
        }
    }
    function populateSiteSettings() {
        const settings = getSiteSettings();
        const meetingUrlContainer = document.getElementById('meeting-url-container');
        document.getElementById('setting-site-name').value = settings.siteName;
        document.getElementById('setting-points-unlock').value = settings.pointsToUnlock;
        document.getElementById('setting-points-lecture').value = settings.pointsPerLecture;
        document.getElementById('setting-banner-text').value = settings.bannerText;
        document.getElementById('setting-courses-unlocked').checked = settings.coursesUnlocked;
        document.getElementById('setting-meetings-unlocked').checked = settings.meetingsUnlocked;
        document.getElementById('setting-meeting-url').value = settings.meetingUrl || '';
        meetingUrlContainer.style.display = settings.meetingsUnlocked ? 'block' : 'none';
    }
    function checkAnnouncement() {
        const announcement = getAnnouncement();
        if (!announcement) return;
        const username = getCurrentUsername();
        const lastSeen = getUserData(username, 'lastSeenAnnouncement');
        if (!lastSeen || lastSeen < announcement.timestamp) {
            document.getElementById('announcement-text').textContent = announcement.message;
            announcementToast.classList.add('active');
            setUserData(username, 'lastSeenAnnouncement', announcement.timestamp);
        }
    }
    function populateAdminTextEditor() {
        const form = document.getElementById('text-editor-form');
        form.innerHTML = '';
        const currentTexts = getTextContentDB();
        const textGroups = {
            "واجهة الدخول والتسجيل": ['login_choice_btn', 'create_account_btn', 'create_account_title', 'register_btn', 'login_title_main', 'login_btn_main', 'name_placeholder', 'password_label', 'password_format_hint', 'password_forgot_hint', 'year_placeholder', 'major_placeholder', 'semester_warning_text', 'auth_error_no_account', 'auth_error_user_exists', 'auth_error_wrong_pass', 'auth_error_banned', 'captcha_enter_code', 'captcha_error'],
            "الواجهة الرئيسية": ['welcome_back', 'nav_pdf', 'nav_sections', 'nav_ai', 'nav_platform', 'nav_settings', 'nav_about', 'nav_courses', 'nav_meetings'],
            "الرسائل والتنبيهات": ['logout_msg', 'fill_all_fields', 'opinion_success', 'rating_thanks', 'blog_saved_success', 'settings_saved', 'announcement_sent', 'clear_data_confirm'],
            "نصوص الأقسام المقفولة": ['courses_locked_msg', 'meetings_locked_main', 'meetings_locked_sub', 'locked_lectures_msg', 'locked_pdfs_msg', 'locked_sections_msg'],
            "نصوص أخرى": ['points_info_main', 'points_info_dev_credit', 'pomodoro_desc', 'pomodoro_work_done', 'pomodoro_break_done']
        };
        for (const groupName in textGroups) {
            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.textContent = groupName;
            const contentDiv = document.createElement('div');
            contentDiv.className = 'details-content';
            textGroups[groupName].forEach(key => {
                if (currentTexts[key]) {
                    const value = currentTexts[key];
                    const labelText = translations.ar[key] || key; // Use default as fallback label
                    const inputType = value.length > 100 ? 'textarea' : 'input';
                    
                    contentDiv.innerHTML += `
                        <div class="input-group">
                            ${inputType === 'textarea' ? `<textarea id="text_edit_${key}" placeholder=" ">${value}</textarea>` : `<input type="text" id="text_edit_${key}" value="${value}" placeholder=" ">`}
                            <label for="text_edit_${key}">${labelText.replace(/<[^>]*>/g, '').substring(0, 50)}</label>
                        </div>
                    `;
                }
            });
            
            details.appendChild(summary);
            details.appendChild(contentDiv);
            form.appendChild(details);
        }
        
        form.innerHTML += `<button type="submit" class="submit-btn" style="font-size: 1.1rem; padding: 12px; margin-top: 10px;">حفظ النصوص</button>`;
    }
    
    function populateAdminRatings() {
        const ratings = getRatings();
        const container = document.getElementById('admin-ratings-list');
        container.innerHTML = '';
        if (ratings.length === 0) {
            container.innerHTML = `<p style="text-align:center; opacity: 0.7;">لا توجد تقييمات لعرضها.</p>`;
        } else {
            ratings.forEach(rating => {
                const card = document.createElement('div');
                card.className = 'opinion-card';
                const date = new Date(rating.timestamp).toLocaleString();
                let starsHTML = '';
                for(let i = 1; i <= 5; i++){
                    starsHTML += `<i class="${i <= rating.rating ? 'fas' : 'far'} fa-star"></i>`;
                }
                card.innerHTML = `<div class="opinion-card-header">
                                        <div class="opinion-author-details">
                                            <span class="opinion-author">${rating.username}</span>
                                            <span class="opinion-meta rating-card-stars">${starsHTML}</span>
                                        </div>
                                        <span class="opinion-timestamp">${date}</span>
                                    </div>`;
                container.appendChild(card);
            });
        }
    }
    function populateAdminAiTools() {
        const tools = getAiToolsDB();
        const container = document.getElementById('admin-ai-tools-list');
        container.innerHTML = '';
        tools.forEach(tool => {
            const itemEl = document.createElement('div');
            itemEl.className = 'detail-item';
            itemEl.innerHTML = `<span>${tool.name}</span>
                                <div style="display: flex; align-items: center; gap: 15px;">
                                  <button class="delete-btn" data-id="${tool.id}" title="حذف"><i class="fas fa-trash"></i></button>
                                </div>`;
            itemEl.querySelector('.delete-btn').addEventListener('click', () => {
                if (confirm(`هل أنت متأكد من حذف أداة "${tool.name}"؟`)) {
                    const newTools = getAiToolsDB().filter(t => t.id !== tool.id);
                    saveAiToolsDB(newTools);
                    populateAdminAiTools();
                }
            });
            container.appendChild(itemEl);
        });
    }
    // END: ADMIN PANEL FUNCTIONS
    
    // --- EVENT LISTENERS ---
    yearSelect.addEventListener('change', (e) => updateMajors(e.target.value, majorSelect));
    semesterSelect.addEventListener('change', () => { 
        const lang = htmlEl.lang || 'ar'; 
        const siteTexts = getTextContentDB(); 
        const submitBtn = document.querySelector('#create-account-form .submit-btn'); 
        if (semesterSelect.value === '2') { 
            submitBtn.disabled = true; 
            semesterWarning.textContent = siteTexts.semester_warning_text; 
        } else { 
            submitBtn.disabled = false; 
            semesterWarning.textContent = ''; 
        } 
    });
    createAccountChoiceBtn.addEventListener('click', () => showAuthView('create'));
    loginChoiceBtn.addEventListener('click', () => { 
        const users = getUsersDB(); 
        if (Object.keys(users).filter(u => u !== 'admen').length === 0 && !users['admen']) { 
            showAuthMessage('auth_error_no_account'); 
            return; 
        } 
        showAuthView('login'); 
    });
    document.querySelectorAll('.back-to-choice-btn').forEach(btn => btn.addEventListener('click', () => showAuthView('choice')));
    createAccountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('create-name').value.trim();
        const password = document.getElementById('create-password').value;
        const userInputCaptcha = captchaInput.value;
        const country = document.getElementById('create-country').value;
        const governorate = document.getElementById('create-governorate').value;
        if (!createAccountForm.checkValidity() || !name || !yearSelect.value || !majorSelect.value) { 
            showAuthMessage('fill_all_fields'); 
            return; 
        }
        if (password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)) { 
            showAuthMessage(password.length < 8 ? 'password_error_length' : 'password_error_format'); 
            return; 
        }
        if (name.toLowerCase() === 'admen') { 
            showAuthMessage('auth_error_user_exists'); 
            return; 
        }
        
        if (userInputCaptcha !== captchaText) { 
            showAuthMessage('captcha_error'); 
            generateNumericCaptcha(); 
            captchaInput.value = ''; 
            return; 
        }
        const db = getUsersDB();
        if (db[name]) { 
            showAuthMessage('auth_error_user_exists'); 
            return; 
        }
        db[name] = { 
            password: password, 
            profile: { 
                name: name, 
                year: yearSelect.value, 
                major: majorSelect.options[majorSelect.selectedIndex].text, 
                semester: semesterSelect.value, 
                country, 
                governorate 
            }, 
             { 
                points: 0, 
                rated: false, 
                note: '', 
                banned: false, 
                viewedContent: [], 
                lastSeenAnnouncement: null, 
                last_active: null 
            } 
        };
        saveUsersDB(db);
        localStorage.setItem(LAST_USER_KEY, name);
        showAuthView('login', { newName: name, newPassword: password });
    });
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('login-name').value.trim();
        const password = document.getElementById('login-password').value;
        if (!name || !password) { 
            showAuthMessage('fill_all_fields'); 
            return; 
        }
        if (name.toLowerCase() === 'admen' && password === 'Amr1221@gmail.com') {
            localStorage.setItem(CURRENT_USER_KEY, 'admen');
            localStorage.setItem('moraCurrentUserRole', 'admin');
            loginPage.classList.add('exit');
            setTimeout(() => { 
                loginPage.classList.remove('active', 'exit'); 
                loadingPage.classList.add('active');
                setTimeout(() => {
                    loadingPage.classList.remove('active');
                    showAdminPanel();
                }, 1500);
            }, 700);
            return;
        }
        const db = getUsersDB();
        const user = db[name];
        if (!user || user.password !== password) { 
            showAuthMessage('auth_error_wrong_pass'); 
            return; 
        }
        if (user.data?.banned) { 
            showAuthMessage('auth_error_banned'); 
            return; 
        }
        
        localStorage.setItem(CURRENT_USER_KEY, name);
        localStorage.setItem('moraCurrentUserRole', 'student');
        localStorage.setItem(LAST_USER_KEY, name);
        
        loginPage.classList.add('exit');
        setTimeout(() => { 
            loginPage.classList.remove('active', 'exit'); 
            loadingPage.classList.add('active'); 
            setTimeout(() => {
                populateMainPage(user.profile); 
                loadingPage.classList.remove('active'); 
                mainPage.classList.add('active');
                checkAnnouncement();
            }, 2500);
        }, 700);
    });
    captchaRefreshBtn.addEventListener('click', generateNumericCaptcha);
    document.querySelectorAll('.password-toggle').forEach(icon => { 
        icon.addEventListener('click', () => { 
            const wrapper = icon.closest('.password-wrapper'); 
            const input = wrapper.querySelector('input'); 
            const isPassword = input.type === 'password'; 
            input.type = isPassword ? 'text' : 'password'; 
            icon.classList.toggle('fa-eye', !isPassword); 
            icon.classList.toggle('fa-eye-slash', isPassword); 
        }); 
    });
    
    backToCoursesBtn.addEventListener('click', () => {
        mainPage.classList.remove('details-active');
        populateMainPage(getCurrentUserData()); // Go back to subjects view
    });
    meetingsBtn.addEventListener('click', () => {
        updateUserActivity();
        const settings = getSiteSettings();
        if (settings.meetingsUnlocked && settings.meetingUrl) {
            showRedirectModal(null, () => window.open(settings.meetingUrl, '_blank'));
        } else {
             meetingsLockedModal.classList.add('active');
        }
    });
    pointsCounter.addEventListener('click', () => {
        updateUserActivity();
        clearTimeout(pointsToastTimeout);
        const lang = htmlEl.lang || 'ar';
        const siteTexts = getTextContentDB();
        pointsInfoToastContent.innerHTML = `<p class="points-info-main-text" data-key="points_info_main">${siteTexts.points_info_main}</p><span class="dev-credit-toast" data-key="points_info_dev_credit">${siteTexts.points_info_dev_credit}</span>`;
        setLanguage(lang); // Re-apply to parse highlights
        pointsInfoToast.classList.add('show');
        const coursesBtnRect = coursesBtn.getBoundingClientRect();
        pointingArrow.style.left = `${coursesBtnRect.left + coursesBtnRect.width / 2}px`;
        pointingArrow.style.top = `${coursesBtnRect.top - 50}px`;
        pointingArrow.classList.add('show');
        
        pointsToastTimeout = setTimeout(() => {
            pointsInfoToast.classList.remove('show');
            pointingArrow.classList.remove('show');
        }, 4000);
    });
    closeToastBtn.addEventListener('click', () => {
        clearTimeout(pointsToastTimeout);
        pointsInfoToast.classList.remove('show');
        pointingArrow.classList.remove('show');
    });
    document.getElementById('lang-switcher').addEventListener('click', e => { 
        if (e.target.closest('.settings-btn')?.dataset.lang) 
            setLanguage(e.target.closest('.settings-btn').dataset.lang); 
    });
    document.getElementById('mode-switcher').addEventListener('click', e => { 
        if (e.target.closest('.settings-btn')?.dataset.mode) 
            setSetting('mode', e.target.closest('.settings-btn').dataset.mode); 
    });
    
    document.querySelectorAll('[data-modal]').forEach(trigger => { 
        trigger.addEventListener('click', () => { 
            updateUserActivity();
            const modalId = trigger.dataset.modal; 
            const modal = document.getElementById(modalId); 
            if(modal) { 
                document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active')); 
                modal.classList.add('active'); 
                if (modalId === 'about-modal') document.querySelector('.glowing-sponsors').classList.add('animate');
                if (modalId === 'opinions-modal') renderOpinions();
                if (modalId === 'ai-modal') populateAiModal();
            } 
        }); 
    });
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal || e.target.closest('.close-btn')) {
                if (modal.id === 'timer-modal') {
                    modal.classList.remove('active'); // Don't reset timer, just hide
                } else {
                    modal.classList.remove('active');
                    if(modal.id === 'about-modal') { document.querySelector('.glowing-sponsors').classList.remove('animate'); }
                    if (modal.id === 'video-player-modal') { const vc = document.getElementById('video-player-container'); if (vc) vc.innerHTML = ''; }
                }
            }
        });
    });
    
    startPauseTimerBtn.addEventListener('click', startPauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    opinionForm.addEventListener('submit', handleOpinionSubmit);
    const rateBtn = document.getElementById('rate-website-btn'), blogBtn = document.getElementById('blog-btn'), ratingModal = document.getElementById('rating-modal'), ratingStars = ratingModal.querySelectorAll('.rating-stars i'), blogTextarea = document.getElementById('blog-textarea'), saveBlogBtn = document.getElementById('save-blog-btn'), charCounter = document.getElementById('char-counter');
    function checkRatedStatus() { 
        const username = getCurrentUsername(); 
        if(!username) return; 
        const hasRated = getUserData(username, 'rated'); 
        rateBtn.style.display = hasRated ? 'none' : 'flex'; 
        blogBtn.style.display = hasRated ? 'flex' : 'none'; 
    }
    ratingStars.forEach(star => { 
        star.addEventListener('mouseover', () => { 
            for (let i = 0; i < ratingStars.length; i++) { 
                ratingStars[i].classList.toggle('fas', i < star.dataset.value); 
                ratingStars[i].classList.toggle('far', i >= star.dataset.value); 
            } 
        }); 
        star.addEventListener('mouseout', () => { 
            ratingStars.forEach(s => { 
                s.classList.remove('fas'); 
                s.classList.add('far'); 
            }); 
        }); 
        star.addEventListener('click', () => { 
            const username = getCurrentUsername(); 
            if(username) { 
                setUserData(username, 'rated', true); 
                const newRating = { username, rating: star.dataset.value, timestamp: new Date().toISOString() }; 
                const ratings = getRatings(); 
                ratings.unshift(newRating); 
                saveRatings(ratings); 
            } 
            ratingModal.classList.remove('active'); 
            showAuthMessage('rating_thanks'); 
            checkRatedStatus(); 
            document.getElementById('about-modal').classList.add('active'); 
        }); 
    });
    blogBtn.addEventListener('click', () => { 
        const username = getCurrentUsername(); 
        if(!username) return; 
        blogTextarea.value = getUserData(username, 'note') || ''; 
        charCounter.textContent = `${blogTextarea.value.length} / 1000`; 
    });
    blogTextarea.addEventListener('input', () => { 
        charCounter.textContent = `${blogTextarea.value.length} / 1000`; 
    });
    saveBlogBtn.addEventListener('click', () => { 
        const username = getCurrentUsername(); 
        if(username) setUserData(username, 'note', blogTextarea.value); 
        const siteTexts = getTextContentDB(); 
        const originalText = siteTexts.blog_save_btn; 
        saveBlogBtn.textContent = siteTexts.blog_saved_success; 
        saveBlogBtn.classList.add('saved'); 
        setTimeout(() => { 
            saveBlogBtn.textContent = originalText; 
            saveBlogBtn.classList.remove('saved'); 
        }, 2000); 
    });
    
    coursesBtn.addEventListener('click', () => {
        updateUserActivity();
        const settings = getSiteSettings();
        const points = getPoints();
        if (settings.coursesUnlocked || points >= settings.pointsToUnlock) {
            mainPage.classList.remove('details-active');
            const userData = getCurrentUserData();
            if (!userData) return;
            if (currentView === 'subjects') {
                displayVideoCategories();
            } else {
                populateMainPage(userData);
            }
        } else {
            const lang = htmlEl.lang || 'ar';
            const siteTexts = getTextContentDB();
            lockedMessageP.innerHTML = siteTexts.courses_locked_msg.replace('__UNLOCK__', settings.pointsToUnlock);
            coursesLockedModal.classList.add('active');
        }
    });
    function showRedirectModal(sourceModalId, actionCallback, customMessage) { 
        const sourceModal = document.getElementById(sourceModalId); 
        if (sourceModal) sourceModal.classList.remove('active'); 
        const siteTexts = getTextContentDB(); 
        const redirectMessageEl = redirectModal.querySelector('.redirect-message'); 
        redirectMessageEl.textContent = customMessage || siteTexts.redirect_msg; 
        let seconds = 3; 
        redirectModal.classList.add('active'); 
        timerElement.textContent = seconds; 
        clearInterval(countdownInterval); 
        countdownInterval = setInterval(() => { 
            seconds--; 
            timerElement.textContent = seconds; 
            if (seconds <= 0) { 
                clearInterval(countdownInterval); 
                redirectModal.classList.remove('active'); 
                if (typeof actionCallback === 'function') actionCallback(); 
            } 
        }, 1000); 
    }
    
    function studentLogout() { 
        mainPage.classList.add('exit'); 
        setTimeout(() => { 
            mainPage.classList.remove('active', 'exit', 'details-active'); 
            coursesContainer.innerHTML = ''; 
            const lastUser = getCurrentUsername(); 
            localStorage.removeItem(CURRENT_USER_KEY);
            localStorage.removeItem('moraCurrentUserRole');
            if(lastUser) localStorage.setItem(LAST_USER_KEY, lastUser); 
            loginPage.classList.remove('exit'); 
            loginPage.classList.add('active'); 
            showAuthView('login'); 
        }, 700); 
    }
    
    function adminLogout() {
        clearInterval(activeUserInterval);
        adminPanel.classList.add('exit');
        setTimeout(() => {
            adminPanel.classList.remove('active', 'exit');
            localStorage.removeItem(CURRENT_USER_KEY);
            localStorage.removeItem('moraCurrentUserRole');
            loginPage.classList.remove('exit');
            loginPage.classList.add('active');
            showAuthView('login');
        }, 700);
    }
    document.getElementById('logout-btn').addEventListener('click', () => { 
        const siteTexts = getTextContentDB(); 
        showRedirectModal('about-modal', studentLogout, siteTexts.logout_msg); 
    });
    adminLogoutBtn.addEventListener('click', () => { 
        const siteTexts = getTextContentDB(); 
        showRedirectModal(null, adminLogout, siteTexts.logout_msg); 
    });
    
    document.getElementById('clear-data-btn').addEventListener('click', () => {
        const siteTexts = getTextContentDB();
        if (confirm(siteTexts.clear_data_confirm)) {
            localStorage.clear();
            location.reload();
        }
    });
    adminNavLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            adminNavLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const viewId = `admin-${link.dataset.view}-view`;
            document.querySelectorAll('.admin-view').forEach(view => view.classList.remove('active'));
            if(document.getElementById(viewId)) {
                document.getElementById(viewId).classList.add('active');
            }
            if (link.dataset.view === 'dashboard') populateAdminStats();
            if (link.dataset.view === 'opinions') populateAdminOpinions();
            if (link.dataset.view === 'students') populateStudentList();
            if (link.dataset.view === 'site-settings') populateSiteSettings();
            if (link.dataset.view === 'ratings') populateAdminRatings();
            if (link.dataset.view === 'ai-tools') populateAdminAiTools();
        });
    });
    
    document.querySelectorAll('.content-view-container').forEach(container => {
        const contentType = container.parentElement.id.split('-')[2];
        createContentManagementUI(contentType, container);
    });
    
    document.getElementById('admin-opinions-list').addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete-btn');
        if (deleteBtn) {
            const opinionId = deleteBtn.dataset.id;
            if (confirm(`هل أنت متأكد من حذف هذا الرأي؟`)) {
                let opinions = getOpinions();
                opinions = opinions.filter(op => op.id != opinionId);
                saveOpinions(opinions);
                populateAdminOpinions();
                populateAdminStats(); // Update stats
            }
        }
    });
    adminStudentListContainer.addEventListener('click', e => {
        const btn = e.target.closest('button');
        if (!btn) return;
        
        const usernameToActOn = btn.dataset.username;
        const users = getUsersDB();
        
        if (btn.classList.contains('ban-btn')) {
            if (users[usernameToActOn]) {
                if (!users[usernameToActOn].data) users[usernameToActOn].data = {};
                users[usernameToActOn].data.banned = !users[usernameToActOn].data.banned;
                saveUsersDB(users);
                populateStudentList();
            }
        } else if (btn.classList.contains('delete-student-btn')) {
            if (confirm(`هل أنت متأكد من حذف الطالب ${usernameToActOn} نهائياً؟ لا يمكن التراجع عن هذا الإجراء.`)) {
                delete users[usernameToActOn];
                saveUsersDB(users);
                populateStudentList();
                populateAdminStats();
            }
        }
    });
    document.getElementById('site-settings-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newSettings = {
            siteName: document.getElementById('setting-site-name').value.trim(),
            pointsToUnlock: parseInt(document.getElementById('setting-points-unlock').value),
            pointsPerLecture: parseInt(document.getElementById('setting-points-lecture').value),
            bannerText: document.getElementById('setting-banner-text').value.trim(),
            coursesUnlocked: document.getElementById('setting-courses-unlocked').checked,
            meetingsUnlocked: document.getElementById('setting-meetings-unlocked').checked,
            meetingUrl: document.getElementById('setting-meeting-url').value.trim()
        };
        saveSiteSettings(newSettings);
        updateSiteNameUI();
        document.querySelector('.scrolling-banner p').textContent = newSettings.bannerText; // Update banner live
        showAuthMessage('settings_saved');
    });
    document.getElementById('setting-meetings-unlocked').addEventListener('change', (e) => {
        document.getElementById('meeting-url-container').style.display = e.target.checked ? 'block' : 'none';
    });
    
    document.getElementById('announcement-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const text = document.getElementById('announcement-textarea').value.trim();
        if (text) {
            const newAnnouncement = { message: text, timestamp: Date.now() };
            saveAnnouncement(newAnnouncement);
            document.getElementById('current-announcement').textContent = `"${text}"`;
            showAuthMessage('announcement_sent');
            e.target.reset();
        }
    });
    document.getElementById('text-editor-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const newTexts = getTextContentDB(); // Start with a copy
        const inputs = e.target.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            const key = input.id.replace('text_edit_', '');
            newTexts[key] = input.value;
        });
        saveTextContentDB(newTexts);
        setLanguage(htmlEl.lang); // Refresh language to apply changes
        showAuthMessage('settings_saved');
    });
    document.getElementById('add-ai-tool-form').addEventListener('submit', e => {
        e.preventDefault();
        const nameInput = document.getElementById('new-ai-tool-name');
        const urlInput = document.getElementById('new-ai-tool-url');
        const name = nameInput.value.trim();
        const url = urlInput.value.trim();
        if (name && url) {
            const tools = getAiToolsDB();
            tools.push({ id: Date.now(), name, url });
            saveAiToolsDB(tools);
            populateAdminAiTools();
            e.target.reset();
        }
    });
    function populateAiModal() {
        const container = document.querySelector('#ai-modal .ai-container');
        container.innerHTML = '';
        const tools = getAiToolsDB();
        tools.forEach(tool => {
            const a = document.createElement('a');
            a.href = tool.url;
            a.className = 'ai-btn';
            a.target = '_blank';
            a.textContent = tool.name;
            container.appendChild(a);
        });
        container.querySelectorAll('a').forEach(link => { 
            link.addEventListener('click', (e) => { 
                e.preventDefault(); 
                showRedirectModal('ai-modal', () => window.open(link.href, '_blank')); 
            }); 
        });
    }
    document.querySelectorAll('.social-icons a').forEach(link => { 
        link.addEventListener('click', (e) => { 
            e.preventDefault(); 
            showRedirectModal(e.target.closest('.modal-overlay')?.id, () => window.open(link.href, '_blank')); 
        }); 
    });
    document.getElementById('platform-btn').addEventListener('click', (e) => { 
        e.preventDefault(); 
        updateUserActivity(); 
        showRedirectModal(null, () => window.open('https://tanta-services.online/TantaPortal/index.php', '_blank')); 
    });
    
    document.body.addEventListener('click', updateUserActivity, true);
    setupLoginAnimation();
    animateLoginBackground();
    window.addEventListener('resize', setupLoginAnimation);
    initializeApp();
});
