const YEAR = 2018
const RETROYEAR = 1943

export const maxNominationsPerCategory = 5

export const categoryInfo = {
  Novel: {
    title: 'Best Novel',
    description: `A science fiction or fantasy story of 40,000 words or more, published for the first time in ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  Novella: {
    title: 'Best Novella',
    description: `A science fiction or fantasy story between 17,500 and 40,000 words, which appeared for the first time in ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  Novelette: {
    title: 'Best Novelette',
    description: `A science fiction or fantasy story between 7,500 and 17,500 words, which appeared for the first time in ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  ShortStory: {
    title: 'Best Short Story',
    description: `A science fiction or fantasy story of fewer than 7,500 words, which appeared for the first time in ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  Series: {
    title: 'Best Series',
    description: `A multi-volume science fiction or fantasy story, unified by elements such as plot, characters, setting, and presentation, which has appeared in at least three (3) volumes consisting of a total of at least 240,000 words by the close of the calendar year ${YEAR}, at least one of which was published in ${YEAR}, and which has not previously won under §3.3.5 of the WSFS Constitution (see note below). 
Previous losing finalists in the Best Series category shall be eligible only upon the publication of at least two (2) additional installments consisting in total of at least 240,000 words after they qualified for their last appearance on the final ballot and by the close of ${YEAR}. 
If any series and a subset series thereof both receive sufficient nominations to appear on the final ballot, only the version which received more nominations shall appear.
`,
    nominationFieldLabels: {
      title: 'Name of Series',
      author: 'Author',
      volume: `${YEAR} example from series`
    }
  },

  RelatedWork: {
    title: 'Best Related Work',
    description: `Any work related to the field of science fiction, fantasy, or fandom, appearing for the first time in ${YEAR}, or which has been substantially modified during ${YEAR} and which is either non-fiction or, if fictional, is noteworthy primarily for aspects other than the fictional text, and which is not eligible in any other category.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author/Editor',
      publisher: 'Publisher/Where Published'
    }
  },

  GraphicStory: {
    title: 'Best Graphic Story',
    description: `Any science fiction or fantasy story told in graphic form, appearing for the first time in ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  DramaticLong: {
    title: 'Best Dramatic Presentation, Long Form',
    description: `Any theatrical feature or other production with a *complete running time of more than 90 minutes*, in any medium of dramatized science fiction, fantasy, or related subjects that has been publicly presented for the first time in its present dramatic form during ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      producer: 'Studio/Network/Production Company'
    }
  },

  DramaticShort: {
    title: 'Best Dramatic Presentation, Short Form',
    description: `Any television program or other production with a *complete running time of 90 minutes or less*, in any medium of dramatized science fiction, fantasy, or related subjects that has been publicly presented for the first time in its present dramatic form during ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      series: '(Series)',
      producer: 'Studio/Network/Production Company'
    }
  },

  EditorShort: {
    title: 'Best Professional Editor, Short Form',
    description: `The editor of at least four (4) anthologies, collections, or magazine issues (or their equivalent in other media) primarily devoted to science fiction and/or fantasy, at least one of which was published in ${YEAR}.`,
    nominationFieldLabels: {
      editor: 'Editor'
    }
  },

  EditorLong: {
    title: 'Best Professional Editor, Long Form',
    description: `The editor of at least four (4) novel-length works primarily devoted to science fiction and/or fantasy published in ${YEAR}, which do not qualify under Best Editor, Short Form`,
    nominationFieldLabels: {
      editor: 'Editor'
    }
  },

  ProArtist: {
    title: 'Best Professional Artist',
    description: `An illustrator whose work has appeared in a professional publication in the field of science fiction or fantasy during ${YEAR}. A professional publication is one that meets at least one (1) of the following criteria:
1. It provided at least a quarter of the income of any one person; or
2. It was owned or published by any entity which provided at least a quarter of the income of any of its staff and/or owner. If possible, please cite an example of the nominee’s work. (Failure to provide such references will not invalidate a nomination.)`,
    nominationFieldLabels: {
      author: 'Artist/Illustrator',
      example: 'Example'
    }
  },

  Semiprozine: {
    title: 'Best Semiprozine',
    description: `Any generally available non-professional publication devoted to science fiction or fantasy which by the close of ${YEAR} had published at least four (4) issues (or the equivalent in other media), and at least one (1) of which appeared in ${YEAR}, which does not qualify as a fancast, and which in ${YEAR} has met at least one (1) of the following criteria:
1. Paid its contributors or staff in other than copies of the publication.
2. Was generally available only for paid purchase`,
    nominationFieldLabels: {
      title: 'Title'
    }
  },

  Fanzine: {
    title: 'Best Fanzine',
    description: `Any generally available non-professional publication devoted to science fiction, fantasy, or related subjects which, by the close of ${YEAR}, had published at least four (4) issues (or the equivalent in other media), at least one (1) of which appeared in ${YEAR}, and which does not qualify as a semiprozine or a fancast, and which in ${YEAR} met neither of the following criteria:
1. Paid its contributors or staff in other than copies of the publication.
2. Was generally available only for paid purchase`,
    nominationFieldLabels: {
      title: 'Title'
    }
  },

  Fancast: {
    title: 'Best Fancast',
    description: `Any generally available non-professional audio or video periodical devoted to science fiction, fantasy, or related subjects that by the close of ${YEAR} has released four (4) or more episodes, at least one (1) of which appeared in ${YEAR}, and that does not qualify as a dramatic presentation.`,
    nominationFieldLabels: {
      title: 'Title',
      address: 'Web address'
    }
  },

  FanWriter: {
    title: 'Best Fan Writer',
    description: `A person whose writing has appeared in fanzines or semiprozines, or in generally available electronic media in ${YEAR}.`,
    nominationFieldLabels: {
      author: 'Author',
      example: 'Example'
    }
  },

  FanArtist: {
    title: 'Best Fan Artist',
    description: `An artist or cartoonist whose work has appeared through publication in fanzines, semiprozines, or through any other public non-professional display (including at a convention or conventions) in ${YEAR}.`,
    nominationFieldLabels: {
      author: 'Artist/Illustrator',
      example: 'Example'
    }
  },

  BestArtBook: {
    title: 'Best Art Book',
    description: `Any art book in the field of science fiction, fantasy, or fandom, appearing for the first time in ${YEAR} or which has been substantially modified in ${YEAR}, and which is not eligible in Best Graphic Story.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },
  
  Lodestar: {
    title: 'Lodestar Award for Best Young Adult Book',
    description: `(not a Hugo) A book published for young adult readers in the field of science fiction or fantasy appearing for the first time in ${YEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  NewWriter: {
    title: 'John W. Campbell Award',
    description: `Award for the best new science fiction writer, sponsored by Dell Magazines (not a Hugo) A new writer is one whose first work of science fiction or fantasy appeared in ${YEAR - 1} or ${YEAR} in a professional publication. For Campbell Award purposes, a professional publication is one for which more than a nominal amount was paid, any publication that had an average press run of at least 10,000 copies, or any other criteria that the Award sponsors may designate.`,
    nominationFieldLabels: {
      author: 'Author',
      example: 'Example'
    }
  },
  
  RetroNovel: {
    title: `Best Novel (${RETROYEAR + 1} Retro Hugo)`,
    description: `A science fiction or fantasy story of 40,000 words or more, which appeared for the first time in ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  RetroNovella: {
    title: `Best Novella (${RETROYEAR + 1} Retro Hugo)`,
    description: `A science fiction or fantasy story between 17,500 and 40,000 words, which appeared for the first time in ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  RetroNovelette: {
    title: `Best Novelette (${RETROYEAR + 1} Retro Hugo)`,
    description: `A science fiction or fantasy story between 7,500 and 17,500 words, which appeared for the first time in ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  RetroShortStory: {
    title: `Best Short Story (${RETROYEAR + 1} Retro Hugo)`,
    description: `A science fiction or fantasy story of fewer than 7,500 words, which appeared for the first time in ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  RetroSeries: {
    title: `Best Series (${RETROYEAR + 1} Retro Hugo)`,
    description: `A multi-volume science fiction or fantasy story, unified by elements such as plot, characters, setting, and presentation, which appeared in at least three (3) volumes consisting of a total of at least 240,000 words by the close of the calendar year ${RETROYEAR}, at least one of which was published in ${RETROYEAR}. If any series and a subset series thereof both receive sufficient nominations to appear on the final ballot, only the version which received more nominations shall appear`,
    nominationFieldLabels: {
      title: 'Name of Series',
      author: 'Author',
      volume: `${RETROYEAR} example from series`
    }
  },
  
  RetroRelatedWork: {
    title: `Best Related Work (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any work related to the field of science fiction, fantasy, or fandom, appearing for the first time in ${RETROYEAR}, or which was substantially modified during ${RETROYEAR}, and which is either non-fiction or, if fictional, is noteworthy primarily for aspects other than the fictional text, and which is not eligible in any other category.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author/Editor',
      publisher: 'Publisher/Where Published'
    }
  },

  RetroGraphicStory: {
    title: `Best Graphic Story (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any science fiction or fantasy story told in graphic form, appearing for the first time in ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  },

  RetroDramaticLong: {
    title: `Best Dramatic Presentation, Long Form (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any theatrical feature or other production with a *complete running time of more than 90 minutes*, in any medium of dramatized science fiction, fantasy, or related subjects that was publicly presented for the first time in its present dramatic form during ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      producer: 'Studio/Network/Production Company'
    }
  },

  RetroDramaticShort: {
    title: `Best Dramatic Presentation, Short Form (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any television program or other production with a *complete running time of 90 minutes or less*, in any medium of dramatized science fiction, fantasy, or related subjects that was publicly presented for the first time in its then dramatic form during ${RETROYEAR}.`,
    nominationFieldLabels: {
      title: 'Title',
      series: '(Series)',
      producer: 'Studio/Network/Production Company'
    }
  },

  RetroEditorShort: {
    title: `Best Professional Editor, Short Form (${RETROYEAR + 1} Retro Hugo)`,
    description: `The editor of at least four (4) anthologies, collections, or magazine issues (or their equivalent in other media) primarily devoted to science fiction and/or fantasy, at least one of which was published in ${RETROYEAR}.`,
    nominationFieldLabels: {
      editor: 'Editor'
    }
  },

  RetroEditorLong: {
    title: `Best Professional Editor, Long Form (${RETROYEAR + 1} Retro Hugo)`,
    description: `The editor of at least four (4) novel-length works primarily devoted to science fiction and/or fantasy published in ${RETROYEAR}, which did not qualify under Best Editor, Short Form`,
    nominationFieldLabels: {
      editor: 'Editor'
    }
  },

  RetroProArtist: {
    title: `Best Professional Artist (${RETROYEAR + 1} Retro Hugo)`,
    description: `An illustrator whose work has appeared in a professional publication in the field of science fiction or fantasy during ${RETROYEAR}. A professional publication is one that meets at least one (1) of the following criteria: 1. It provided at least a quarter of the income of any one person; or 2. It was owned or published by any entity which provided at least a quarter of the income of any of its staff and/or owner. If possible, please cite an example of the nominee’s work. (Failure to provide such references will not invalidate a nomination.)`,
    nominationFieldLabels: {
      author: 'Artist/Illustrator',
      example: 'Example'
    }
  },

  RetroSemiprozine: {
    title: `Best Semiprozine (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any generally available non-professional publication devoted to science fiction or fantasy which by the close of ${RETROYEAR} had published at least four (4) issues (or the equivalent in other media), and at least one (1) of which appeared in ${RETROYEAR}, which does not qualify as a fancast, and which in ${RETROYEAR} has met at least one (1) of the following criteria: 1. Paid its contributors or staff in other than copies of the publication. 2. Was generally available only for paid purchase.`,
    nominationFieldLabels: {
      title: 'Title'
    }
  },

  RetroFanzine: {
    title: `Best Fanzine (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any generally available non-professional publication devoted to science fiction, fantasy, or related subjects which, by the close of ${RETROYEAR}, had published at least four (4) issues (or the equivalent in other media), at least one (1) of which appeared in ${RETROYEAR}, and which does not qualify as a semiprozine or a fancast, and which in ${RETROYEAR} met neither of the following criteria: 1. Paid its contributors or staff in other than copies of the publication. 2. Was generally available only for paid purchase.`,
    nominationFieldLabels: {
      title: 'Title'
    }
  },

  RetroFancast: {
    title: `Best Fancast (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any generally available non-professional audio or video periodical devoted to science fiction, fantasy, or related subjects that by the close of ${RETROYEAR} had released four (4) or more episodes, at least one (1) of which appeared in ${RETROYEAR}, and that does not qualify as a dramatic presentation.`,
    nominationFieldLabels: {
      title: 'Title'
    }
  },

  RetroFanWriter: {
    title: `Best Fan Writer (${RETROYEAR + 1} Retro Hugo)`,
    description: `A person whose writing appeared in fanzines or semiprozines, or in generally available electronic media in ${RETROYEAR}.`,
    nominationFieldLabels: {
      author: 'Author',
      example: 'Example'
    }
  },

  RetroFanArtist: {
    title: `Best Fan Artist (${RETROYEAR + 1} Retro Hugo)`,
    description: `An artist or cartoonist whose work appeared through publication in fanzines, semiprozines, or through any other public non-professional display (including at a convention or conventions) in ${RETROYEAR}.`,
    nominationFieldLabels: {
      author: 'Artist/Illustrator',
      example: 'Example'
    }
  },

  RetroBestArtBook: {
    title: `Best Art Book (${RETROYEAR + 1} Retro Hugo)`,
    description: `Any art book in the field of science fiction, fantasy, or fandom, appearing for the first time in ${RETROYEAR} or which was substantially modified in ${RETROYEAR}, and which is not eligible in Best Graphic Story.`,
    nominationFieldLabels: {
      title: 'Title',
      author: 'Author',
      publisher: 'Publisher/Where Published'
    }
  }
}

export const nominationFields = categories => {
  if (!Array.isArray(categories)) categories = [categories]
  const nf = {}
  categories.forEach(cat => {
    const texts = categoryInfo[cat]
    if (!texts) throw new Error('Unknown category ' + JSON.stringify(cat))
    for (const key in texts.nominationFieldLabels) nf[key] = true
  })
  return Object.keys(nf)
}

