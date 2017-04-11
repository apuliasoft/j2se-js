import { Locale } from 'j2se-js/java/util';
import { TimeZone } from 'j2se-js/java/util';

/**
 * Abstract class Calendar see https://docs.oracle.com/javase/8/docs/api/java/util/Calendar.html
 */
export abstract class Calendar  {

    /**
    * Field number for get and set indicating the
    * week number within the current year.  The first week of the year, as
    * defined by <code>getFirstDayOfWeek()</code> and
    * <code>getMinimalDaysInFirstWeek()</code>, has value 1.  Subclasses define
    * the value of WEEK_OF_YEAR for days before the first week of
    * the year.
    *
    * @see #getFirstDayOfWeek
    * @see #getMinimalDaysInFirstWeek
    */
   public static readonly WEEK_OF_YEAR:number = 3;

   /**
    * Field number for get and set indicating the
    * week number within the current month.  The first week of the month, as
    * defined by <code>getFirstDayOfWeek()</code> and
    * <code>getMinimalDaysInFirstWeek()</code>, has value 1.  Subclasses define
    * the value of WEEK_OF_MONTH for days before the first week of
    * the month.
    *
    * @see #getFirstDayOfWeek
    * @see #getMinimalDaysInFirstWeek
    */
   public static readonly WEEK_OF_MONTH:number = 4;


    /**
     * Field number for get and set indicating the day of the month.
     */
    static readonly DATE:number = 5;

    /**
     * Field number for get and set indicating the day of the month.
     */
    static readonly DAY_OF_MONTH:number = 5;

    /**
     * Field number for get and set indicating the day of the week.
     */
    static readonly DAY_OF_WEEK:number = 7;

    /**
     * Field number for get and set indicating the day of the week in the month.
     */
    static readonly DAY_OF_WEEK_IN_MONTH:number = 8;
    
    /**
     * Field number for get and set indicating the day of the year.
     */
    static readonly DAY_OF_YEAR:number = 6;

    static readonly COMPUTED:number = 1;

    public static readonly AM_PM:number = 9;

    /**
    * The corresponding fields[] has no value.
    */
    static readonly UNSET:number = 0;

   /**
    * The value of the corresponding fields[] has been set externally. Stamp
    * values which are greater than 1 represents the (pseudo) time when the
    * corresponding fields[] value was set.
    */
    static readonly MINIMUM_USER_STAMP:number = 2;

    /**
    * Field number for get and set indicating the
    * era, e.g., AD or BC in the Julian calendar. This is a calendar-specific
    * value; see subclass documentation.
    *
    * @see GregorianCalendar#AD
    * @see GregorianCalendar#BC
    */
   public static readonly ERA:number = 0;

   /**
    * Field number for get and set indicating the
    * year. This is a calendar-specific value; see subclass documentation.
    */
   public static readonly YEAR:number = 1;

   /**
    * Field number for get and set indicating the
    * hour of the morning or afternoon. HOUR is used for the
    * 12-hour clock (0 - 11). Noon and midnight are represented by 0, not by 12.
    * E.g., at 10:04:15.250 PM the HOUR is 10.
    *
    * @see #AM_PM
    * @see #HOUR_OF_DAY
    */
   public static readonly HOUR:number = 10;

   /**
    * Field number for get and set indicating the
    * hour of the day. HOUR_OF_DAY is used for the 24-hour clock.
    * E.g., at 10:04:15.250 PM the HOUR_OF_DAY is 22.
    *
    * @see #HOUR
    */
   public static readonly HOUR_OF_DAY:number = 11;

   /**
    * Field number for get and set indicating the
    * minute within the hour.
    * E.g., at 10:04:15.250 PM the MINUTE is 4.
    */
   public static readonly MINUTE:number = 12;

   /**
    * Field number for get and set indicating the
    * second within the minute.
    * E.g., at 10:04:15.250 PM the SECOND is 15.
    */
   public static readonly SECOND:number = 13;

   /**
    * Field number for get and set indicating the
    * millisecond within the second.
    * E.g., at 10:04:15.250 PM the MILLISECOND is 250.
    */
   public static readonly MILLISECOND:number = 14;

   /**
    * Field number for get and set
    * indicating the raw offset from GMT in milliseconds.
    * 
    * This field reflects the correct GMT offset value of the time
    * zone of this Calendar if the
    * TimeZone implementation subclass supports
    * historical GMT offset changes.
    */
   public static readonly ZONE_OFFSET:number = 15;

   /**
    * Field number for get and set indicating the
    * daylight saving offset in milliseconds.
    * 
    * This field reflects the correct daylight saving offset value of
    * the time zone of this Calendar if the
    * TimeZone implementation subclass supports
    * historical Daylight Saving Time schedule changes.
    */
   public static readonly DST_OFFSET:number = 16;

   /**
    * The number of distinct fields recognized by get and set.
    * Field numbers range from <code>0..FIELD_COUNT-1</code>.
    */
   public static readonly FIELD_COUNT:number = 17;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Sunday.
    */
   public static readonly SUNDAY:number = 1;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Monday.
    */
   public static readonly MONDAY:number = 2;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Tuesday.
    */
   public static readonly TUESDAY:number = 3;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Wednesday.
    */
   public static readonly WEDNESDAY:number = 4;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Thursday.
    */
   public static readonly THURSDAY:number = 5;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Friday.
    */
   public static readonly FRIDAY:number = 6;

   /**
    * Value of the {@link #DAY_OF_WEEK} field indicating
    * Saturday.
    */
   public static readonly SATURDAY:number = 7;

    public static readonly MONTH:number = 2;
   /**
    * Value of the {@link #MONTH} field indicating the
    * first month of the year in the Gregorian and Julian calendars.
    */
   public static readonly JANUARY:number = 0;

   /**
    * Value of the {@link #MONTH} field indicating the
    * second month of the year in the Gregorian and Julian calendars.
    */
   public static readonly FEBRUARY:number = 1;

   /**
    * Value of the {@link #MONTH} field indicating the
    * third month of the year in the Gregorian and Julian calendars.
    */
   public static readonly MARCH:number = 2;

   /**
    * Value of the {@link #MONTH} field indicating the
    * fourth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly APRIL:number = 3;

   /**
    * Value of the {@link #MONTH} field indicating the
    * fifth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly MAY:number = 4;

   /**
    * Value of the {@link #MONTH} field indicating the
    * sixth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly JUNE:number = 5;

   /**
    * Value of the {@link #MONTH} field indicating the
    * seventh month of the year in the Gregorian and Julian calendars.
    */
   public static readonly JULY:number = 6;

   /**
    * Value of the {@link #MONTH} field indicating the
    * eighth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly AUGUST:number = 7;

   /**
    * Value of the {@link #MONTH} field indicating the
    * ninth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly SEPTEMBER:number = 8;

   /**
    * Value of the {@link #MONTH} field indicating the
    * tenth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly OCTOBER:number = 9;

   /**
    * Value of the {@link #MONTH} field indicating the
    * eleventh month of the year in the Gregorian and Julian calendars.
    */
   public static readonly NOVEMBER:number = 10;

   /**
    * Value of the {@link #MONTH} field indicating the
    * twelfth month of the year in the Gregorian and Julian calendars.
    */
   public static readonly DECEMBER:number = 11;

   /**
    * Value of the {@link #MONTH} field indicating the
    * thirteenth month of the year. Although GregorianCalendar
    * does not use this value, lunar calendars do.
    */
   public static readonly UNDECIMBER:number = 12;

   /**
    * Value of the {@link #AM_PM} field indicating the
    * period of the day from midnight to just before noon.
    */
   public static readonly AM:number = 0;

   /**
    * Value of the {@link #AM_PM} field indicating the
    * period of the day from noon to just before midnight.
    */
   public static readonly PM:number = 1;

    protected fields: number[];

    /**
     * Returns the value of the given calendar field. This method does
     * not involve normalization or validation of the field value.
     *
     * @param field the given calendar field.
     * @return the value for the given calendar field.
     * @see #get(int)
     */
    protected internalGet(field: number): number{
        return this.fields[field];
    }

    /**
     * Sets the value of the given calendar field. This method does
     * not affect any setting state of the field in this
     * Calendar instance.
     *
     * @throws IndexOutOfBoundsException if the specified field is out of range
     *             (<code>field &lt; 0 || field &gt;= FIELD_COUNT</code>).
     * @see #areFieldsSet
     * @see #isTimeSet
     * @see #areAllFieldsSet
     * @see #set(int,int)
     */
    protected internalSet(field: number, value: number) {
        this.fields[field] = value;
    }

    public static getAvailableCalendarTypes():string[] {
        return Calendar.AvailableCalendarTypes.SET;
    }

    static AvailableCalendarTypes = class {
        static readonly SET:string[] = ['gregory', 'buddhist', 'japanese'];
        
    //     static {
    //        Set<String> set = new HashSet<>(3);
    //        set.add("gregory");
    //        set.add("buddhist");
    //        set.add("japanese");
    //        SET = Collections.unmodifiableSet(set);
    //    }
       private AvailableCalendarTypes() {
       }
    }

}

export module Calendar {
    export class Builder {

       private static readonly NFIELDS:number = Calendar.FIELD_COUNT + 1; // +1 for WEEK_YEAR
       private static readonly WEEK_YEAR:number = Calendar.FIELD_COUNT;

       private instant:number; //should be a long

       // Calendar.stamp[] (lower half) and Calendar.fields[] (upper half) combined
       private fields :number[];
       // Pseudo timestamp starting from MINIMUM_USER_STAMP.
       // (COMPUTED is used to indicate that the instant has been set.)
       private nextStamp:number;
       // maxFieldIndex keeps the max index of fields which have been set.
       // (WEEK_YEAR is never included.)
       private maxFieldIndex:number;
       private type:string;

       private zone:TimeZone;

       private lenient:boolean = true;

       private locale:Locale;

       private firstDayOfWeek:number;
       private minimalDaysInFirstWeek:number;

       /**
        * Constructs a {@code Calendar.Builder}.
        */
       constructor() {
       }

       /**
        * Sets the instant parameter to the given instant value that is
        * a millisecond offset from <a href="Calendar.html#Epoch">the
        * Epoch</a>.
        *
        * @param instant a millisecond offset from the Epoch
        * @return this {@code Calendar.Builder}
        * @throws IllegalStateException if any of the field parameters have
        *                               already been set
        * @see Calendar#setTime(Date)
        * @see Calendar#setTimeInMillis(long)
        * @see Calendar#time
        */
       public setInstant(instant:number | Date):Builder {
           if (this.fields != null) {
               throw new Error();//IllegalStateException();
           }
           if ((<Date>instant).getTime() ) {
                this.instant = (<Date>instant).getTime();
           } else if ( typeof instant === 'number') {
                this.instant = instant;
           }
           this.nextStamp = Calendar.COMPUTED;
           return this;
       }

       /**
        * Sets the field parameter to the given value.
        * field is an index to the {@link Calendar#fields}, such as
        * {@link Calendar#DAY_OF_MONTH DAY_OF_MONTH}. Field value validation is
        * not performed in this method. Any out of range values are either
        * normalized in lenient mode or detected as an invalid value in
        * non-lenient mode when building a Calendar.
        *
        * @param field an index to the Calendar fields
        * @param value the field value
        * @return this {@code Calendar.Builder}
        * @throws IllegalArgumentException if field is invalid
        * @throws IllegalStateException if the instant value has already been set,
        *                      or if fields have been set too many
        *                      (approximately {@link Integer#MAX_VALUE}) times.
        * @see Calendar#set(int, int)
        */
       public set(field: number, value:number): Builder {
           // Note: WEEK_YEAR can't be set with this method.
           if (field < 0 || field >= Calendar.FIELD_COUNT) {
               throw new Error("field is invalid");//IllegalArgumentException
           }
           if (this.isInstantSet()) {
               throw new Error("instant has been set");//IllegalStateException
           }
           this.allocateFields();
           this.internalSet(field, value);
           return this;
       }

       /**
        * Sets field parameters to their values given by
        * fieldValuePairs that are pairs of a field and its value.
        * For example,
        * <pre>
        *   setFeilds(Calendar.YEAR, 2013,
        *             Calendar.MONTH, Calendar.DECEMBER,
        *             Calendar.DAY_OF_MONTH, 23);</pre>
        * is equivalent to the sequence of the following
        * {@link #set(int, int) set} calls:
        * <pre>
        *   set(Calendar.YEAR, 2013)
        *   .set(Calendar.MONTH, Calendar.DECEMBER)
        *   .set(Calendar.DAY_OF_MONTH, 23);</pre>
        *
        * @param fieldValuePairs field-value pairs
        * @return this {@code Calendar.Builder}
        * @throws NullPointerException if fieldValuePairs is null
        * @throws IllegalArgumentException if any of fields are invalid,
        *             or if {@code fieldValuePairs.length} is an odd number.
        * @throws IllegalStateException    if the instant value has been set,
        *             or if fields have been set too many (approximately
        *             {@link Integer#MAX_VALUE}) times.
        */
       public setFields(...fieldValuePairs:number[]):Builder {
           let len:number = fieldValuePairs.length; 
           if ((len % 2) != 0) {
              throw new Error(); //Error();
           }
           if (this.isInstantSet()) {
               throw new Error("instant has been set");//IllegalStateException
           }
           if ((this.nextStamp + len / 2) < 0) {
               throw new Error("stamp counter overflow");//IllegalStateException
           }
           this.allocateFields();
           for (let i = 0; i < len; ) {
               let field:number = fieldValuePairs[i++];
               // Note: WEEK_YEAR can't be set with this method.
               if (field < 0 || field >= Calendar.FIELD_COUNT) {
                   throw new Error("field is invalid");//IllegalArgumentException
               }
               this.internalSet(field, fieldValuePairs[i++]);
           }
           return this;
       }

       /**
        * Sets the date field parameters to the values given by year,
        * month, and dayOfMonth. This method is equivalent to
        * a call to:
        * <pre>
        *   setFields(Calendar.YEAR, year,
        *             Calendar.MONTH, month,
        *             Calendar.DAY_OF_MONTH, dayOfMonth);</pre>
        *
        * @param year       the {@link Calendar#YEAR YEAR} value
        * @param month      the {@link Calendar#MONTH MONTH} value
        *                   (the month numbering is <em>0-based</em>).
        * @param dayOfMonth the {@link Calendar#DAY_OF_MONTH DAY_OF_MONTH} value
        * @return this {@code Calendar.Builder}
        */
       public setDate(year:number, month:number, dayOfMonth:number):Builder {
           return this.setFields(Calendar.YEAR, year, Calendar.MONTH, month, Calendar.DAY_OF_MONTH, dayOfMonth);
       }

       /**
        * Sets the time of day field parameters to the values given by
        * hourOfDay, minute, second, and
        * millis. This method is equivalent to a call to:
        * <pre> 
        *   setFields(Calendar.HOUR_OF_DAY, hourOfDay,
        *             Calendar.MINUTE, minute,
        *             Calendar.SECOND, second,
        *             Calendar.MILLISECOND, millis);</pre>
        *
        * @param hourOfDay the {@link Calendar#HOUR_OF_DAY HOUR_OF_DAY} value
        *                  (24-hour clock)
        * @param minute    the {@link Calendar#MINUTE MINUTE} value
        * @param second    the {@link Calendar#SECOND SECOND} value
        * @param millis    the {@link Calendar#MILLISECOND MILLISECOND} value
        * @return this {@code Calendar.Builder}
        */
       public setTimeOfDay(hourOfDay:number, minute:number, second:number, millis?:number):Builder {
           return this.setFields(Calendar.HOUR_OF_DAY, hourOfDay, Calendar.MINUTE, minute,
                            Calendar.SECOND, second, Calendar.MILLISECOND, millis ? millis : 0);
       }

       /**
        * Sets the week-based date parameters to the values with the given
        * date specifiers - week year, week of year, and day of week.
        *
        * If the specified calendar doesn't support week dates, the
        * {@link #build() build} method will throw an {@link IllegalArgumentException}.
        *
        * @param weekYear   the week year
        * @param weekOfYear the week number based on weekYear
        * @param dayOfWeek  the day of week value: one of the constants
        *     for the {@link Calendar#DAY_OF_WEEK DAY_OF_WEEK} field:
        *     {@link Calendar#SUNDAY SUNDAY}, ..., {@link Calendar#SATURDAY SATURDAY}.
        * @return this {@code Calendar.Builder}
        * @see Calendar#setWeekDate(int, int, int)
        * @see Calendar#isWeekDateSupported()
        */
       public setWeekDate(weekYear:number, weekOfYear:number, dayOfWeek:number):Builder {
           this.allocateFields();
           this.internalSet(Builder.WEEK_YEAR, weekYear);
           this.internalSet(Calendar.WEEK_OF_YEAR, weekOfYear);
           this.internalSet(Calendar.DAY_OF_WEEK, dayOfWeek);
           return this;
       }

       /**
        * Sets the time zone parameter to the given zone. If no time
        * zone parameter is given to this {@code Caledar.Builder}, the
        * {@linkplain TimeZone#getDefault() default
        * TimeZone} will be used in the {@link #build() build}
        * method.
        *
        * @param zone the {@link TimeZone}
        * @return this {@code Calendar.Builder}
        * @throws NullPointerException if zone is null
        * @see Calendar#setTimeZone(TimeZone)
        */
       public setTimeZone(zone:TimeZone):Builder {
           if (zone == null) {
               throw new Error(); //NullPointerException();
           }
           this.zone = zone;
           return this;
       }

       /**
        * Sets the lenient mode parameter to the value given by lenient.
        * If no lenient parameter is given to this {@code Calendar.Builder},
        * lenient mode will be used in the {@link #build() build} method.
        *
        * @param lenient true for lenient mode;
        *                false for non-lenient mode
        * @return this {@code Calendar.Builder}
        * @see Calendar#setLenient(boolean)
        */
       public setLenient(lenient:boolean):Builder {
           this.lenient = lenient;
           return this;
       }

       /**
        * Sets the calendar type parameter to the given type. The
        * calendar type given by this method has precedence over any explicit
        * or implicit calendar type given by the
        * {@linkplain #setLocale(Locale) locale}.
        *
        * In addition to the available calendar types returned by the
        * {@link Calendar#getAvailableCalendarTypes() Calendar.getAvailableCalendarTypes}
        * method, {@code "gregorian"} and {@code "iso8601"} as aliases of
        * {@code "gregory"} can be used with this method.
        *
        * @param type the calendar type
        * @return this {@code Calendar.Builder}
        * @throws NullPointerException if type is null
        * @throws IllegalArgumentException if type is unknown
        * @throws IllegalStateException if another calendar type has already been set
        * @see Calendar#getCalendarType()
        * @see Calendar#getAvailableCalendarTypes()
        */
       public setCalendarType(type:string):Builder {
           if (type === "gregorian") { // NPE if type == null
               type = "gregory";
           }
           if (Calendar.getAvailableCalendarTypes().indexOf(type) >= 0
                   && type !=="iso8601" ) {
               throw new Error("unknown calendar type: " + type);//IllegalArgumentException
           }
           if (this.type == null) {
               this.type = type;
           } else {
               if (this.type !== type) {
                   throw new Error("calendar type override");//IllegalStateException
               }
           }
           return this;
       }

       /**
        * Sets the locale parameter to the given locale. If no locale
        * is given to this {@code Calendar.Builder}, the {@linkplain
        * Locale#getDefault(Locale.Category) default Locale}
        * for {@link Locale.Category#FORMAT} will be used.
        *
        * If no calendar type is explicitly given by a call to the
        * {@link #setCalendarType(String) setCalendarType} method,
        * the Locale value is used to determine what type of
        * Calendar to be built.
        *
        * If no week definition parameters are explicitly given by a call to
        * the {@link #setWeekDefinition(int,int) setWeekDefinition} method, the
        * Locale's default values are used.
        *
        * @param locale the {@link Locale}
        * @throws NullPointerException if locale is null
        * @return this {@code Calendar.Builder}
        * @see Calendar#getInstance(Locale)
        */
       public setLocale(locale:Locale):Builder {
           if (locale == null) {
              throw new Error(); //NullPointerException();
         }
         this.locale = locale;
          return this;
      }

       /**
        * Sets the week definition parameters to the values given by
        * firstDayOfWeek and minimalDaysInFirstWeek that are
        * used to determine the <a href="Calendar.html#First_Week">first
        * week</a> of a year. The parameters given by this method have
        * precedence over the default values given by the
        * {@linkplain #setLocale(Locale) locale}.
        *
        * @param firstDayOfWeek the first day of a week; one of
        *                       {@link Calendar#SUNDAY} to {@link Calendar#SATURDAY}
        * @param minimalDaysInFirstWeek the minimal number of days in the first
        *                               week (1..7)
        * @return this {@code Calendar.Builder}
        * @throws IllegalArgumentException if firstDayOfWeek or
        *                                  minimalDaysInFirstWeek is invalid
        * @see Calendar#getFirstDayOfWeek()
        * @see Calendar#getMinimalDaysInFirstWeek()
        */
       public setWeekDefinition(firstDayOfWeek:number, minimalDaysInFirstWeek:number):Builder {
           if (!this.isValidWeekParameter(firstDayOfWeek)
                   || !this.isValidWeekParameter(minimalDaysInFirstWeek)) {
               throw new Error(); //IllegalArgumentException();
           }
           this.firstDayOfWeek = firstDayOfWeek;
           this.minimalDaysInFirstWeek = minimalDaysInFirstWeek;
           return this;
       }

       /**
        * Returns a Calendar built from the parameters set by the
        * setter methods. The calendar type given by the {@link #setCalendarType(String)
        * setCalendarType} method or the {@linkplain #setLocale(Locale) locale} is
        * used to determine what Calendar to be created. If no explicit
        * calendar type is given, the locale's default calendar is created.
        *
        * If the calendar type is {@code "iso8601"}, the
        * {@linkplain GregorianCalendar#setGregorianChange(Date) Gregorian change date}
        * of a {@link GregorianCalendar} is set to {@code Date(Long.MIN_VALUE)}
        * to be the <em>proleptic</em> Gregorian calendar. Its week definition
        * parameters are also set to be <a
        * href="GregorianCalendar.html#iso8601_compatible_setting">compatible
        * with the ISO 8601 standard</a>. Note that the
        * {@link GregorianCalendar#getCalendarType() getCalendarType} method of
        * a GregorianCalendar created with {@code "iso8601"} returns
        * {@code "gregory"}.
        *
        * The default values are used for locale and time zone if these
        * parameters haven't been given explicitly.
        *
        * Any out of range field values are either normalized in lenient
        * mode or detected as an invalid value in non-lenient mode.
        *
        * @return a Calendar built with parameters of this {@code
        *         Calendar.Builder}
        * @throws IllegalArgumentException if the calendar type is unknown, or
        *             if any invalid field values are given in non-lenient mode, or
        *             if a week date is given for the calendar type that doesn't
        *             support week dates.
        * @see Calendar#getInstance(TimeZone, Locale)
        * @see Locale#getDefault(Locale.Category)
        * @see TimeZone#getDefault()
        */
       public build():Calendar {
           throw new Error('not yet implemented');
       }

       private allocateFields() {
           if (this.fields == null) {
               this.fields = [Builder.NFIELDS * 2];
               this.nextStamp = Calendar.MINIMUM_USER_STAMP;
               this.maxFieldIndex = -1;
           }
       }

       private  internalSet(field:number, value:number) {
           this.fields[field] = this.nextStamp++;
           if (this.nextStamp < 0) {
               throw new Error("stamp counter overflow");//IllegalStateException
           }
           this.fields[Builder.NFIELDS + field] = value;
           if (field > this.maxFieldIndex && field < Builder.WEEK_YEAR) {
               this.maxFieldIndex = field;
           }
       }

       private isInstantSet():boolean {
           return this.nextStamp == Calendar.COMPUTED;
       }

       private isSet(index:number):boolean {
           return this.fields != null && this.fields[index] > Calendar.UNSET;
       }

       private isValidWeekParameter(value:number):boolean {
           return value > 0 && value <= 7;
       }

    }

}