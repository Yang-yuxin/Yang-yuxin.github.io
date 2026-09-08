---
permalink: /
author_profile: false
redirect_from:
  - /about/
  - /about.html
---
<div class="home-profile">
  <header class="home-intro" id="about">
    <div class="home-intro-copy">
      <h1>Hi, I’m <span>Yuxin Yang.</span></h1>
      <p class="home-lead">I am a Ph.D. student at USC, advised by <a href="https://sites.usc.edu/prasanna/">Prof. Viktor Prasanna</a>. I work on <strong>large language models</strong>, <strong>agentic AI systems</strong>, <strong>generative recommendation</strong>, and <strong>graph machine learning</strong>.</p>
      <p>Before USC, I received my B.Eng. in Automation from Tsinghua University. I have had the opportunity to work with <a href="https://muhanzhang.github.io/">Prof. Muhan Zhang</a>, <a href="https://scholar.google.com/citations?user=KVzR1XEAAAAJ&amp;hl=en">Prof. Yitao Liang</a>, and <a href="https://yilinmo.github.io/">Prof. Yilin Mo</a>.</p>
      <nav class="home-actions" aria-label="Contact and academic profiles">
        <a href="{{ '/files/cv_phd.pdf' | relative_url }}">{% include icons/file-lines.svg %}<span>CV</span></a>
        <a href="mailto:{{ site.author.email }}">{% include icons/envelope.svg %}<span>Email</span></a>
        <a href="{{ site.author.googlescholar | escape }}">{% include icons/graduation-cap.svg %}<span>Google Scholar</span></a>
        <a href="https://github.com/{{ site.author.github }}">{% include icons/github.svg %}<span>GitHub</span></a>
        <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">{% include icons/linkedin.svg %}<span>LinkedIn</span></a>
      </nav>
    </div>
    <figure class="home-portrait">
      <img src="{{ '/images/profile.jpg' | relative_url }}" alt="Yuxin Yang" width="941" height="941" fetchpriority="high">
      <figcaption>{% include icons/location-dot.svg %} Los Angeles, California</figcaption>
    </figure>
  </header>

  <section class="home-section home-experience" id="experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience, Education &amp; Support</h2>
    <div class="experience-list">
      <article class="experience-row">
        <a class="company-logo company-logo--capital-one" href="https://www.capitalone.com/" aria-label="Capital One website"><img src="{{ '/images/logos/capital-one.svg' | relative_url }}" alt="Capital One" width="418" height="150" loading="lazy"></a>
        <div class="experience-content">
          <div class="experience-heading"><h3>Capital One <span>Ph.D. Fellowship</span></h3><p class="experience-date">2024 – 2027</p></div>
          <p>Research supported by the Capital One Fellowship in <span class="fellowship-year">2024–2025</span>, <span class="fellowship-year">2025–2026</span>, and <span class="fellowship-year">2026–2027</span>.</p>
        </div>
      </article>
      <article class="experience-row">
        <a class="company-logo" href="https://www.bytedance.com/en/" aria-label="ByteDance website"><img src="{{ '/images/logos/bytedance-mark.png' | relative_url }}" alt="ByteDance" width="300" height="300"></a>
        <div class="experience-content">
          <div class="experience-heading"><h3>ByteDance <span>Summer Intern</span></h3><p class="experience-date"><time datetime="2026-05">May</time>–<time datetime="2026-08">Aug 2026</time></p></div>
          <p><strong>LLM-native generative recommendation.</strong> Used semantic ID (SID) sequences from users’ historical item interactions as LLM inputs to directly predict the SID of the next item a user would interact with.</p>
        </div>
      </article>
      <article class="experience-row">
        <a class="company-logo company-logo--tsinghua" href="https://www.tsinghua.edu.cn/en/" aria-label="Tsinghua University website"><img src="{{ '/images/logos/tsinghua-seal.png' | relative_url }}" alt="Tsinghua University" width="200" height="200" loading="lazy"></a>
        <div class="experience-content">
          <div class="experience-heading"><h3>Tsinghua University <span>B.Eng. in Automation</span></h3><p class="experience-date">Sep 2019 – Jun 2023</p></div>
          <p>Department of Automation</p>
        </div>
      </article>
      <article class="experience-row">
        <a class="company-logo" href="https://www.bigai.ai/" aria-label="BIGAI website"><img src="{{ '/images/logos/bigai-mark.png' | relative_url }}" alt="BIGAI" width="192" height="192" loading="lazy"></a>
        <div class="experience-content">
          <div class="experience-heading"><h3>BIGAI <span>Research Intern</span></h3><p class="experience-date">Nov 2021 – Jun 2022</p></div>
          <p>Beijing Institute for General Artificial Intelligence. Worked with <a href="https://muhanzhang.github.io/">Prof. Muhan Zhang</a> on parameter-adaptive graph neural networks.</p>
        </div>
      </article>
    </div>
  </section>

  <section class="home-section home-research" id="publications" aria-labelledby="publications-heading">
    <div class="section-heading"><h2 id="publications-heading">Selected Publications</h2><p>* Equal contribution <a href="{{ site.author.googlescholar | escape }}">Google Scholar ↗</a></p></div>
    <div class="publication-list">
      {% for publication in site.data.home_publications %}
      <article class="publication">
        <div class="publication-body">
          <p class="publication-venue">{{ publication.venue }}{% if publication.detail != '' %}<span>{{ publication.detail }}</span>{% endif %}</p>
          <h3><a href="{{ publication.url }}">{{ publication.title }}</a></h3>
          <p class="publication-authors">{{ publication.authors }}</p>
          <p class="publication-summary">{{ publication.summary }}</p>
          <nav class="publication-links" aria-label="Resources for {{ publication.title | escape }}">
            {% for link in publication.links %}<a href="{{ link.url }}" aria-label="{{ link.label }}: {{ publication.title | escape }}" title="{{ link.label }}">{% case link.label %}{% when 'Paper' %}{% include icons/file-lines.svg %}{% when 'Code' %}{% include icons/github.svg %}{% when 'Project' %}{% include icons/globe.svg %}{% when 'Video' %}{% include icons/circle-play.svg %}{% endcase %}<span class="screen-reader-text">{{ link.label }}</span></a>{% endfor %}
          </nav>
        </div>
      </article>
      {% endfor %}
    </div>
  </section>

  <section class="home-section home-interests" aria-labelledby="interests-heading">
    <h2 id="interests-heading">Beyond Research</h2>
    <p>In my spare time, I enjoy music, piano, and sports. I built an interactive <a href="https://yang-yuxin.github.io/easychord/">webpage on harmony chords</a> while learning music theory. I’m also exploring cycling and running routes throughout Los Angeles — find me on <a href="https://www.strava.com/athletes/131359911">Strava ↗</a>.</p>
  </section>
</div>
